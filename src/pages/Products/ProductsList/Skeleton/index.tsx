import { IdWrapper, InfoWrapper, ProductDescription, ProductWrapper, Separator } from "../Product/index.style"
import { Skeleton as MUISkeleton } from '@mui/material'

const Skeleton = () => {
  return (
    <ProductWrapper>
      <MUISkeleton sx={{ bgcolor: 'grey.900', borderRadius: '8px' }} variant="rectangular" width={400} height={400} />
      <InfoWrapper>
        <MUISkeleton sx={{ bgcolor: 'grey.900', marginBottom: '10px' }} variant="rectangular" width={'100%'} height={30} />
        <MUISkeleton sx={{ bgcolor: 'grey.500' }} variant="rectangular" width={200} height={20} />
        <Separator />
        <ProductDescription>
          <MUISkeleton sx={{ bgcolor: 'grey.500' }} variant="rectangular" width={'100%'} height={20} />
        </ProductDescription>
        <Separator />
        <IdWrapper>
          <MUISkeleton sx={{ bgcolor: 'grey.500' }} variant="rectangular" width={150} height={20} />
          <MUISkeleton sx={{ bgcolor: 'grey.500' }} variant="rectangular" width={50} height={20} />
        </IdWrapper>
      </InfoWrapper>
    </ProductWrapper>
  )
}

export default Skeleton