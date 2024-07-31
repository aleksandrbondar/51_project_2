/* eslint-disable @typescript-eslint/no-unused-vars */
import { put, takeEvery, all, call, select } from "redux-saga/effects";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";


// Slice methods and options-------------------------------------------------------------------------------
import { UsersOptionsInterface, usersStorageOptions } from "./slices/usersSlice";
import { ProductsOptionsInterface, productsStorageOptions } from "./slices/productsSlice";
import { PostsOptionsInterface, postsStorageOptions } from "./slices/postsSlice";
import { RootState } from "./store";

interface ProductsOptions extends ProductsOptionsInterface {
  action?: ActionInterface | undefined;
}
interface UsersOptions extends UsersOptionsInterface {
  action?: ActionInterface | undefined;
}
interface PostsOptions extends PostsOptionsInterface {
  action?: ActionInterface | undefined;
}
type FetchWithOptionsInterface = ProductsOptions | UsersOptions | PostsOptions
interface ActionInterface {
  type: string;
  payload?: FetchParamsInterface | undefined;
}
export interface FetchParamsInterface {
  url: string,
  fetchParams: AxiosRequestConfig,
}

function* selectData(storage: keyof RootState) {
  const data: object[] = yield select((state: RootState) => state[storage].data);
  return data;
}

function* selectDataLength(storage: keyof RootState) {
  const dataSize: [] = yield select((state: RootState) => state[storage].data);
  return dataSize.length;
}

function* fetchDataLength(options: FetchWithOptionsInterface) {
  const { action, url, fetchDataFailure, setDataSize } = options;
  const fetchURL = action?.payload?.url ?? url
  try {
    const response: [] = yield fetchData({ url: fetchURL, fetchParams: { timeout: 5000 } });
    const dataSize = response.length ?? null
    yield put(setDataSize(dataSize));
  } catch (error) {
    if (axios.isCancel(error)) {
      yield put(fetchDataFailure('Request cancelled'));
    } else if (error instanceof Error) {
      yield put(fetchDataFailure(error.message));
    }
  }
}

function* fetchData({ url, fetchParams }: FetchParamsInterface) {
  const cancelTokenSource = axios.CancelToken.source();
  const response: AxiosResponse = yield call(() => axios.get(url, {
    cancelToken: cancelTokenSource.token,
    ...fetchParams
  }));
  return response.data;
}

function* fetchDataWithOptions(options: FetchWithOptionsInterface) {
  const { action, url, fetchDataRequest, fetchDataSuccess, fetchDataFailure, fetchDataSave, updateProgress } = options;
  const fetchURL = action?.payload?.url ?? url
  const fetchParams = action?.payload ?? { timeout: 5000 };
  try {
    yield put(fetchDataRequest());

    const response: [] = yield fetchData({ url: fetchURL, fetchParams });

    yield put(fetchDataSave(response));
    yield put(updateProgress(100));
    yield put(fetchDataSuccess());

  } catch (error) {
    if (axios.isCancel(error)) {
      yield put(fetchDataFailure('Request cancelled'));
    } else if (error instanceof Error) {
      yield put(fetchDataFailure(error.message));
    }
  }
}

function* usersStorage() {
  // Triggers
  const { getData } = usersStorageOptions;
  yield takeEvery(getData.type, (action: ActionInterface | undefined) => fetchDataWithOptions({ ...usersStorageOptions as unknown as FetchWithOptionsInterface, action }));
}
function* postsStorage() {
  // Triggers
  const { getData, getDataSize } = postsStorageOptions;
  yield takeEvery(getData.type, (action: ActionInterface | undefined) => fetchDataWithOptions({ ...postsStorageOptions, action }));
  yield takeEvery(getDataSize.type, (action: ActionInterface | undefined) => fetchDataLength({ ...postsStorageOptions, action }));
}
function* productsStorage() {
  // Triggers
  const { getData, getDataSize } = productsStorageOptions;
  yield takeEvery(getData.type, (action: ActionInterface | undefined) => fetchDataWithOptions({ ...productsStorageOptions, action }));
  yield takeEvery(getDataSize.type, (action: ActionInterface | undefined) => fetchDataLength({ ...productsStorageOptions, action }));
}
export default function* rootSaga() {
  yield all([usersStorage(), postsStorage(), productsStorage()]);
}