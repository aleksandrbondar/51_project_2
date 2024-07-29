/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { FetchOptionsInterface } from "../../types/FetchOptionsInterface";

export interface ProductsDataInterface {
  name: string
  description: string
  price: number
  category: string
  image: string
  id: number
}
export interface ProductsStorageInterface {
  storage: string
  url: string
  page: number
  limit: number
  dataSize: number
  data: ProductsDataInterface[] | []
  loading: boolean
  error: Error | null
  loadStatus: string | null
  loadProgress: number | null
  [key: string]: string | boolean | object | unknown[] | undefined | number | Error | null
}


export interface ProductsOptionsInterface extends FetchOptionsInterface {
  fetchDataSave: (data: ProductsDataInterface[]) => { payload: ProductsDataInterface[], type: string };
  updateProgress: (progress: number | null) => { payload: number | null, type: string };
  deleteData: () => { type: string };
  setPage: (page: number) => { payload: number, type: string };
  getDataSize: (action?: object | undefined) => { payload: object | undefined, type: string };
  setDataSize: (dataSize: number) => { payload: number, type: string };
}

const initialState = {
  storage: 'productsStorage',
  url: 'https://66929096346eeafcf46d5af3.mockapi.io/products',
};

export const productsSlice = createSlice({
  name: initialState.storage,
  initialState: { ...initialState, data: [], page: 1, limit: 4, dataSize: 0, loading: false, error: null, loadStatus: null, loadProgress: null } as ProductsStorageInterface,
  reducers: {
    getData: (_state, _action) => {
    },
    fetchDataRequest(state) {
      state.loading = true;
      state.error = null;
      state.loadStatus = "loading";
    },
    fetchDataSuccess(state) {
      state.loading = false;
      state.loadStatus = "success";
    },
    fetchDataSave(state, action) {
      state.data = action.payload
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload || 'Failed to fetch products';
      state.loadStatus = "error";
    },
    deleteData: (state) => {
      state.data.length = 0;
      state.loading = false;
      state.loadStatus = null;
    },
    updateProgress: (state, action) => {
      state.loadProgress = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    getDataSize: (_state, _action) => { },
    setDataSize: (state, action) => {
      state.dataSize = action.payload
    }
  },
})

const { storage, url } = initialState
export const productsStorageOptions = { ...productsSlice.actions, storage, url }
export default productsSlice.reducer