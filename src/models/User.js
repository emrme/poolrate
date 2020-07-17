import { types, flow } from 'mobx-state-tree'
import magic from '../services/magic'

export const User = types
  .model({
    email: '',
    addresses: types.optional(types.array(types.string), []),
    selectedAddress: '',
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
          self.addresses.indexOf(publicAddress) === -1 &&
            self.addresses.push(publicAddress)
        }
      } catch (error) {
        console.error('Failed', error)
      }
    }),
    selfdestruct () {
      self.email = ''
      self.addresses = []
      self.selectedAddress = ''
      self.idToken = ''
    }
  }))
