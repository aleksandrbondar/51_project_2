import { Pagination as MuiPagination } from '@mui/material';

interface PaginationInterface {
  page?: number
  count?: number
  onChange?: (event: React.ChangeEvent<unknown>, value: number) => void
}
const Pagination = ({ page, count, onChange }: PaginationInterface) => {
  return (
    <MuiPagination
      onChange={onChange}
      sx={{ display: 'flex', justifyContent: 'center', py: 3 }}
      size="large"
      page={page}
      count={count}
      variant="outlined"
      shape="rounded"
    />
  )
}

export default Pagination