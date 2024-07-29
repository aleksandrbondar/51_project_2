import { AppStyled, SectionStyled } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Posts from './Pages/Posts';
import Users from './Pages/Users';
import { Provider } from 'react-redux';
import store from './storage/store';
import Products from './Pages/Products';

const App = () => {
  return (
    <AppStyled>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <SectionStyled>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
              <Route path="*" element={<Home />} />
            </Routes>

          </SectionStyled>
        </BrowserRouter>
      </Provider>
    </AppStyled>
  );
};

export default App
