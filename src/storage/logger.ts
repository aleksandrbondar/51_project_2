/* eslint-disable @typescript-eslint/no-unused-vars */
import { Middleware } from '@reduxjs/toolkit'

const logger: Middleware = (storeApi) => (next) => (action) => {
  const prevState = storeApi.getState()
  const result = next(action)
  const nextState = storeApi.getState()

  // console.groupCollapsed(action)
  // console.log('prev state', prevState)
  // console.log('action', action)
  // console.log('next state', nextState)
  // console.groupEnd()
  return result
}

export default logger