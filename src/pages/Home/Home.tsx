import { Hero, HeroWrapper$1, HeroWrapper$2, HeroWrapper$3, HeroItem$1, HeroItem$2, HeroItem$3, TitleContainer, Title, LinkStyled } from './Home.style'
import { RootState } from '../../storage/store';
import { useDispatch, useSelector } from 'react-redux';
import { heroStorageOptions } from '../../storage/slices/heroSlice';
import { imgPromise } from '../../services/imgPromiseError';
import { useEffect } from 'react';
const { setImgLoadStatus, setHeroState } = heroStorageOptions

const Home = () => {
  const { heroState, heroHover, imgUrl, allImgLoadStatus } = useSelector((state: RootState) => state.heroStateStorage);
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([imgPromise(imgUrl)])
      .then(() => console.log('img loaded'))
      .then(() => setTimeout(() => {
        dispatch(setImgLoadStatus(true))
        console.log('dispatch')
      }, 5000))
      .catch(error => console.error('Failed to load images', error));
  }, [imgUrl, dispatch]);

  return (
    <>
      <Hero style={allImgLoadStatus ? { opacity: 1 } : { opacity: 0 }}>

        <HeroWrapper$1
          style={heroHover[heroState].hero1}
          onMouseEnter={() => dispatch(setHeroState('hero1'))}
          onMouseLeave={() => dispatch(setHeroState('default'))}>
          <HeroItem$1 style={{ backgroundImage: `url(${imgUrl[0]})` }}>
            <TitleContainer>
              <Title>Our Customers love us</Title>
              <LinkStyled to='/users'>See more</LinkStyled>
            </TitleContainer>
          </HeroItem$1>
        </HeroWrapper$1>

        <HeroWrapper$2
          style={heroHover[heroState].hero2}
          onMouseEnter={() => dispatch(setHeroState('hero2'))}
          onMouseLeave={() => dispatch(setHeroState('default'))}>
          <HeroItem$2 style={{ backgroundImage: `url(${imgUrl[1]})` }}>
            <TitleContainer>
              <Title>We make asome products</Title>
              <LinkStyled to='/products'>See more</LinkStyled>
            </TitleContainer>
          </HeroItem$2>
        </HeroWrapper$2>

        <HeroWrapper$3
          style={heroHover[heroState].hero3}
          onMouseEnter={() => dispatch(setHeroState('hero3'))}
          onMouseLeave={() => dispatch(setHeroState('default'))}>
          <HeroItem$3 style={{ backgroundImage: `url(${imgUrl[2]})` }}>
            <TitleContainer>
              <Title>Visit our blog</Title>
              <LinkStyled to='/posts'>See more</LinkStyled>
            </TitleContainer>
          </HeroItem$3>
        </HeroWrapper$3>
      </Hero >
    </>
  );
}

export default Home;