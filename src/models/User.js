import { types, flow } from 'mobx-state-tree'
import magic from '../services/magic'

export const Address = types.model({
  address: types.identifier,
  label: ''
})

export const User = types
  .model({
    email: '',
    addresses: types.map(Address),
    selectedAddress: types.maybeNull(types.reference(Address)),
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
          self.addresses.put({ address: publicAddress })
        }
      } catch (error) {
        console.error('Failed to fetch user metadata', error)
      }
    }),
    selfdestruct () {
      self.email = ''
      self.addresses = []
      self.selectedAddress = ''
      self.idToken = ''
    }
  }))
