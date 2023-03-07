import React from 'react'

import SignInfoStore from './SignInfoStore'

import { createContext, useContext } from 'react'
class RootStore {
  constructor () {
    this.userStore = new SignInfoStore()
  }
}

const rootStore = new RootStore()
const RootContext = createContext()

export const RootStoreProvider = ({ children }) => {
  return (
    <RootContext.Provider value={rootStore}>{children}</RootContext.Provider>
  )
}

export const useRootStore = () => {
  return useContext(RootContext)
}
