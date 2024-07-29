import { PostsOptionsInterface } from "../storage/slices/postsSlice";
import { ProductsOptionsInterface } from "../storage/slices/productsSlice";
import { UsersOptionsInterface } from "../storage/slices/usersSlice";

export interface FetchOptionsInterface {
  storage: string;
  url: string;
  getData: (options?: object | undefined) => { payload?: object | undefined, type: string };
  fetchDataRequest: () => { type: string };
  fetchDataSuccess: () => { type: string };
  fetchDataFailure: (error: string) => { payload: string, type: string };
  deleteData: () => { type: string };
}

export type SliceOptionsInterface = PostsOptionsInterface | UsersOptionsInterface | ProductsOptionsInterface