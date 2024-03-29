import { useContext, createContext } from 'react'
import { types, Instance, onSnapshot } from 'mobx-state-tree'

import { Auth } from './Auth'
import { User } from './User'

const RootModel = types
  .model({
    auth: Auth,
    user: User,
    isLoading: types.boolean,
    showOnboarding: true
  })
  .actions(self => ({
    setIsLoading (bool) {
      self.isLoading = bool
    },
    toggleShowOnboarding () {
      self.showOnboarding = !self.showOnboarding
    },
    reset () {
      Object.keys(self).forEach(key => {
        self[key].reset && self[key].reset()
      })
    }
  }))

export const rootStore = RootModel.create({
  auth: {
    isLoggedIn: false
  },
  user: {
    email: '',
    addresses: {},
    selectedAddress: '',
    idToken: ''
  },
  isLoading: false
})

onSnapshot(rootStore, snapshot => console.log('Snapshot: ', snapshot))

const RootStoreContext = createContext(null)

export const Provider = RootStoreContext.Provider

export function useMst () {
  const store = useContext(RootStoreContext)
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }
  return store
}
