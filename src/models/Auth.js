import { types, getRoot } from 'mobx-state-tree'

export const Auth = types
  .model({
    isLoggedIn: false
  })
  .actions(self => ({
    login (idToken) {
      getRoot(self).user.setIdToken(idToken)
      self.isLoggedIn = true
    },
    logout () {
      getRoot(self).user.selfdestruct()
      self.isLoggedIn = false
    }
  }))
