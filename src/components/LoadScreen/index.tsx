
import { LoadIcon, LoadScreenStyled, SuccessIcon } from './index.style'
import { useSelector } from 'react-redux';
import { RootState } from '../../storage/store';

const LoadScreen = () => {
  const { state, style } = useSelector((state: RootState) => state.screenLoadingStateStorage);
  return (
    <LoadScreenStyled style={style[state].screen} >
      <LoadIcon style={style[state].loadIcon} />
      <SuccessIcon style={style[state].successIcon} />
    </LoadScreenStyled>
  )
}

export default LoadScreen