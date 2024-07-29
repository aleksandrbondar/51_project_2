import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './reduxSaga'
import logger from './logger'
import postsSlice from './slices/postsSlice'
import usersSlice from './slices/usersSlice'
import productsSlice from './slices/productsSlice'
import heroSlice from './slices/heroSlice'
import screenLoadingSlice from './slices/screenLoadingSlice'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    postsStorage: postsSlice,
    usersStorage: usersSlice,
    productsStorage: productsSlice,
    heroStateStorage: heroSlice,
    screenLoadingStateStorage: screenLoadingSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware, logger),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store

export const sliceOptions = new Map([])