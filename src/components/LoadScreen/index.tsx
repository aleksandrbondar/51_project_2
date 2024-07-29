import { CircularProgress } from '@mui/material'
import { LoadScreenStyled } from './index.style'
import DoneIcon from '@mui/icons-material/Done';
import { useSelector } from 'react-redux';
import { RootState } from '../../storage/store';

const LoadScreen = () => {
  const { state, style } = useSelector((state: RootState) => state.screenLoadingStateStorage);
  return (
    <LoadScreenStyled style={style[state].screen} >
      <CircularProgress className='loadIcon' style={style[state].loadIcon} size={100} />
      <DoneIcon className='successIcon' style={style[state].successIcon} />
    </LoadScreenStyled>
  )
}

export default LoadScreen