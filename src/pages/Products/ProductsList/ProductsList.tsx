import Pagination from "../../../components/Pagination"
import { ProductsDataInterface } from "../../../storage/slices/productsSlice"
import { ProductsListStyled } from "./ProductsList.style"
import Product from "./Product/Product"
import Skeleton from "./Skeleton/Skeleton"

interface ProductsListInterface {
  data: ProductsDataInterface[],
  page: number,
  limit: number,
  loadStatus: string | null,
  dataSize: number,
  handlePageChange: (_event: React.ChangeEvent<unknown>, page: number) => void
}
const ProductsList = ({ data, page, limit, loadStatus, dataSize, handlePageChange }: ProductsListInterface) => {
  return (
    <ProductsListStyled>
      {loadStatus === 'success' && data ? (
        (data as ProductsDataInterface[]).map((product, index) => (
          <Product key={index} data={product} />
        ))
      ) : (
        Array.from({ length: limit }).map((_, index) => (
          <Skeleton key={index} />
        ))
      )}
      {dataSize > limit && <Pagination page={page} count={Math.ceil(dataSize / limit)} onChange={handlePageChange} />}
    </ProductsListStyled>
  )
}

export default ProductsList