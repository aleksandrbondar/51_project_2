import { ContainerStyled } from '../../styles/GlobalStyles';
import { UsersStyled } from './Users.style';
import { RootState } from '../../storage/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { usersStorageOptions } from '../../storage/slices/usersSlice';
const { getData } = usersStorageOptions
import LoadingStatus from '../../components/LoadingStatus';
import UserList from './UsersLists/UsersLists';
import Skeleton from './Skeleton/Skeleton';

const Users = () => {
  const { data, loadStatus } = useSelector((state: RootState) => state.usersStorage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData({}))
  }, [dispatch]);

  return (
    <UsersStyled>
      <LoadingStatus status={loadStatus} />
      <ContainerStyled>
        <h1>Our Customers</h1>
        {loadStatus === 'success' ? <UserList data={data} /> : <Skeleton count={data.length + 1} />}
      </ContainerStyled>
    </UsersStyled>
  );
};

export default Users;