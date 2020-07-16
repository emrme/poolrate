import { useContext, createContext } from 'react'
import { types, Instance, onSnapshot } from 'mobx-state-tree'

import { Auth } from './Auth'

const RootModel = types.model({
  auth: Auth,
  name: types.string
})

export const rootStore = RootModel.create({
  auth: {
    isLoggedIn: false
  },
  name: 'Amir'
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
