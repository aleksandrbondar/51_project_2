import { ContainerStyled } from '../../styles/GlobalStyles'
import { ItemStyled } from './index.style'
import { RootState } from '../../storage/store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { productsStorageOptions } from '../../storage/slices/productsSlice'
const { getDataSize, setPage, getData } = productsStorageOptions
import LoadingStatus from '../../components/LoadingStatus'
import ProductsList from './ProductsList'

const Products = () => {
  const { data, loadStatus, limit, dataSize, page } = useSelector((state: RootState) => state.productsStorage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataSize({}))
    return () => {
      dispatch(setPage(1))
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(getData({ timeout: 5000, params: { page: page, limit: limit } }))
  }, [page, limit, dispatch])

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setPage(page))
    window.scrollTo({ top: 56, behavior: 'smooth' });
  };

  return (
    <ItemStyled>
      <LoadingStatus status={loadStatus} />
      <ContainerStyled>
        <h1>Products</h1>
        <ProductsList data={data} page={page} limit={limit} loadStatus={loadStatus} dataSize={dataSize} handlePageChange={handlePageChange} />
      </ContainerStyled>
    </ItemStyled>
  )
}

export default Products