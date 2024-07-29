/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { ContainerStyled } from '../../styles/GlobalStyles';
import { PostsStyled } from './Posts.style';
import { RootState } from '../../storage/store';
import { postsStorageOptions } from '../../storage/slices/postsSlice';
const { setImgLoading, setPostsPage, getData, unmountPosts, getDataSize } = postsStorageOptions
import { useEffect } from 'react';
import LoadingStatus from '../../components/LoadingStatus';
import LoadScreen from '../../components/LoadScreen';
import { imgPromise } from '../../services/imgPromiseError';
import { setScreenLoadingState } from '../../storage/slices/screenLoadingSlice';
import PostsList from './PostsList/PostsList';

const Posts = () => {
  const { data, loadStatus, page, dataSize, imgLoading, limit } = useSelector((state: RootState) => state.postsStorage);
  const { state } = useSelector((state: RootState) => state.screenLoadingStateStorage);
  const dispatch = useDispatch();

  const currectPageData = data.slice((page - 1) * limit, page * limit);

  useEffect(() => {
    dispatch(getDataSize({}));
    dispatch(getData({ timeout: 5000 }));
    return () => {
      dispatch(unmountPosts());
    };
  }, []);

  useEffect(() => {
    dispatch(setScreenLoadingState('loading'))
    dispatch(setImgLoading(true))

    Promise.all([imgPromise(currectPageData.map(obj => obj.img))])
      .then(() => dispatch(setScreenLoadingState('loaded')))
      .then(() => setTimeout(() => dispatch(setImgLoading(false)), 500))
      .then(() => setTimeout(() => dispatch(setScreenLoadingState('hide')), 500))
      .then(() => setTimeout(() => dispatch(setScreenLoadingState('remove')), 1000))
      .catch(error => console.error('Failed to load images', error));
  }, [page]);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setPostsPage(page));
    setTimeout(() => { window.scrollTo({ top: 56, behavior: 'smooth' }) }, 300);
  };

  return (
    <>
      <LoadScreen />
      <LoadingStatus status={imgLoading ? 'loading' : loadStatus} />
      <PostsStyled style={{ opacity: state === 'remove' ? '1' : '0' }}>
        <ContainerStyled >
          <h1>Posts</h1>
          {data &&
            <PostsList
              data={currectPageData}
              dataSize={dataSize}
              page={page}
              limit={limit}
              handlePageChange={handlePageChange} />}
        </ContainerStyled>
      </PostsStyled>
    </>
  );
};

export default Posts;