/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { FetchOptionsInterface } from "../../types/FetchOptionsInterface";

export interface UsersDataInterface {
  id: number
  name: string
  email: string
  phone: string
  website: string
}

export interface UsersStorageInterface {
  storage: string
  url: string
  data: UsersDataInterface[] | []
  dataSize: number
  loading: boolean
  error: Error | null
  loadStatus: string | null
  loadProgress: number | null
  [key: string]: string | boolean | object | [] | undefined | number | Error | null
}

export interface UsersOptionsInterface extends FetchOptionsInterface {
  fetchDataSave: (data: UsersDataInterface[]) => { payload: object[], type: string };
  updateProgress: (progress: number | null) => { payload: number | null, type: string };
  getDataSize: (action: object | undefined) => { payload: object | undefined, type: string };
  setDataSize: (dataSize: number) => { payload: number, type: string };
}

const initialState = {
  storage: 'usersStorage',
  url: 'https://jsonplaceholder.typicode.com/users',
};

export const usersSlice = createSlice({
  name: initialState.storage,
  initialState: { ...initialState, data: [], dataSize: 0, loading: false, error: null, loadStatus: 'loading', loadProgress: null } as UsersStorageInterface,
  reducers: {
    getData(_state, _action) { },
    fetchDataRequest(state) {
      state.loading = true;
      state.error = null;
      state.loadStatus = "loading";
    },
    fetchDataSuccess(state) {
      state.loading = false;
      state.loadStatus = "success";
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload || 'Failed to fetch posts';
      state.loadStatus = "error";
    },
    fetchDataSave(state, action) {
      state.data = action.payload
    },
    deleteData: (state) => {
      state.data.length = 0;
      state.loading = false;
    },
    updateProgress(state, action) {
      state.loadProgress = action.payload
    },
  },
})
const { storage, url } = initialState
export const usersStorageOptions = { ...usersSlice.actions, storage, url }
export default usersSlice.reducer

