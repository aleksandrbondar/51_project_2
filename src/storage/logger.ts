/* eslint-disable @typescript-eslint/no-unused-vars */
import { Middleware } from '@reduxjs/toolkit'

const logger: Middleware = (storeApi) => (next) => (action) => {
  const result = next(action)
  return result
}

export default logger