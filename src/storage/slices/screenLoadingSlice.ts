import { createSlice } from "@reduxjs/toolkit";

interface ScreenLoadingStateInterface {
  storage: string
  data?: []
  state: 'default' | 'loading' | 'loaded' | 'hide' | 'remove'
  style: {
    [key: string]: {
      [key: string]: {
        [key: string]: string
      }
    }
  }
}

const initialState = {
  storage: 'screenLoadingStateStorage',
  state: 'default',
  style: {
    default: {
      screen: {},
      loadIcon: {},
      successIcon: {},
    },
    loading: {
      screen: { opacity: '1' },
      loadIcon: { opacity: '1' },
      successIcon: {},
    },
    loaded: {
      screen: { opacity: '1' },
      loadIcon: { opacity: '0' },
      successIcon: { opacity: '1' },
    },
    hide: {
      screen: { opacity: '0' },
      loadIcon: {},
      successIcon: { opacity: '0' },
    },
    remove: {
      screen: { display: 'none' },
      loadIcon: {},
      successIcon: {},
    }
  }
};

export const postsSlice = createSlice({
  name: initialState.storage,
  initialState: { ...initialState } as ScreenLoadingStateInterface,
  reducers: {
    setScreenLoadingState(state, action) {
      state.state = action.payload
    }
  },
})
export const { setScreenLoadingState } = postsSlice.actions
export default postsSlice.reducer