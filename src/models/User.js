import { types, flow, destroy, applySnapshot, getRoot } from 'mobx-state-tree'
import magic from '../services/magic'

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
    fetchUserMetadata: flow(function * fetchUserMetadata () {
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
    checkIfLoggedIn: flow(function * checkIfLoggedIn () {
      try {
        const isLoggedIn = yield magic.user.isLoggedIn()
        if (isLoggedIn) {
          const idToken = yield magic.user.getIdToken()
          getRoot(self).setIsLoading(false)
          // if (idToken) getRoot(self).auth.login(idToken)
        }
      } catch (error) {
        console.error('Failed to check if user is logged in magic', error)
      }
    }),
    reset () {
      applySnapshot(self, {})
    }
  }))
