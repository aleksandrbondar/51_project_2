import Box from '@mui/material/Box';
import MUISkeleton from '@mui/material/Skeleton';
const Skeleton = ({ count }: { count: number }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <MUISkeleton height={53} />
      {Array.from({ length: count }).map((_, index) => (
        <MUISkeleton key={index} animation="wave" height={53} />
      ))}
    </Box>
  )
}

export default Skeleton