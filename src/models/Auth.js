import { types } from 'mobx-state-tree'

export const Auth = types
  .model({
    isLoggedIn: types.boolean
  })
  .actions(self => ({
    login () {
      self.isLoggedIn = true
    },
    logout () {
      self.isLoggedIn = false
    }
  }))
