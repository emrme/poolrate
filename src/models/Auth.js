import { types, getRoot, applySnapshot } from 'mobx-state-tree'

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
      getRoot(self).setIsLoading(true)
      getRoot(self).user.reset()
      self.reset()
      getRoot(self).setIsLoading(false)
    },
    reset () {
      applySnapshot(self, {})
    }
  }))
