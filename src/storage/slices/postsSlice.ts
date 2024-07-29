/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { FetchOptionsInterface } from "../../types/FetchOptionsInterface";


export interface PostsDataInterface {
  title: string
  body: string
  id: number
  img: string
}
export interface PostsStorageInterface {
  storage: string
  url: string
  page: number
  limit: number
  data: PostsDataInterface[] | []
  dataSize: number
  imgUrlData: string[]
  loading: boolean
  error: Error | null
  loadStatus: string | null
  imgLoading: boolean
  loadProgress: number | null
  [key: string]: string | boolean | object | [] | undefined | number | Error | null
}

export interface PostsOptionsInterface extends FetchOptionsInterface {
  fetchDataSave: (data: PostsDataInterface[]) => { payload: PostsDataInterface[], type: string };
  updateProgress: (progress: number | null) => { payload: number | null, type: string };
  deleteData: () => { type: string };
  setPostsPage: (page: number) => { payload: number, type: string };
  setImgLoading: (loading: boolean) => { payload: boolean, type: string };
  unmountPosts: () => { type: string };
  getDataSize: (dataSize?: object | undefined) => { payload: object | undefined, type: string };
  setDataSize: (dataSize: number) => { payload: number, type: string };
}

const initialState = {
  storage: 'postsStorage',
  url: 'https://jsonplaceholder.typicode.com/posts',
};

export const postsSlice = createSlice({
  name: initialState.storage,
  initialState: { ...initialState, data: [], dataSize: 0, imgUrlData: [], page: 1, loading: false, error: null, loadStatus: null, imgLoading: true, loadProgress: null, limit: 10 } as PostsStorageInterface,
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
    fetchDataSave(state, action) {
      state.data = action.payload.map((post: PostsDataInterface, index: number) => ({ ...post, img: `https://picsum.photos/800/1000?random=${index}` }));
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload || 'Failed to fetch posts';
      state.loadStatus = "error";
    },
    updateProgress(state, action) {
      state.loadProgress = action.payload
    },
    deleteData: (state) => {
      state.data.length = 0;
      state.loading = false;
      state.loadStatus = null;
    },
    setPostsPage: (state, action) => {
      state.page = action.payload

    },
    setImgLoading(state, action) {
      state.imgLoading = action.payload
      state.loadStatus = "success";
    },
    unmountPosts: (state) => {
      state.page = 1
      state.imgLoading = false
    },
    getDataSize: (_state, _action) => { },
    setDataSize: (state, action) => {
      state.dataSize = action.payload
    }
  },
})
const { storage, url } = initialState
export const postsStorageOptions = { ...postsSlice.actions, storage, url }
export default postsSlice.reducer