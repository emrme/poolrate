import { types, flow, destroy, applySnapshot } from 'mobx-state-tree'
import magic from '../services/magic'
import { nanoid } from 'nanoid/async/index.native'

export const Address = types.model({
  address: types.identifier,
  label: ''
})

export const User = types
  .model({
    email: '',
    addresses: types.map(Address),
    selectedAddress: types.optional(types.reference(Address), ''),
    idToken: ''
  })
  .actions(self => ({
    setIdToken (idToken) {
      self.idToken = idToken
      self.fetchUserMetadata()
    },
    fetchUserMetadata: flow(function * setUser () {
      try {
        if (self.idToken.length > 0) {
          const { email, publicAddress } = yield magic.user.getMetadata()
          self.email = email
          self.addAddress(publicAddress, 'Magic')
        }
      } catch (error) {
        console.error('Failed to fetch user metadata', error)
      }
    }),
    addAddress (address, label = '') {
      self.addresses.put({
        address: address,
        label: label
      })
    },
    reset () {
      applySnapshot(self, {})
    }
  }))
