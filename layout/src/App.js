import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Layout from './components/layout';
import MainRoutes from './routes';
import ProductsProvider from './providers/products';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Titillium Web',
      textTransform: 'none',
      fontSize: 14,
      fontWeight: 400,
      color: '#353535'
    },
  },
  body:{
    fontFamily: 'Titillium Web',
    fontSize: 14,
    textTransform: 'none',
    fontWeight: 400,
    color: '#353535'
  }
});

function App() {
  const localCart = JSON.parse(localStorage.getItem('reactShopping: cart'))

  if (localCart !== null) {
    store.dispatch({ type: 'CHANGE_CART', localCart })
  }
  return (
    <Provider store={store}>
      <ProductsProvider>
        <ThemeProvider theme={theme}>
          <Router basename={'desafio-maeztra-javascript'}>
            <Layout >
              <MainRoutes />
            </Layout>
          </Router>
        </ThemeProvider>
      </ProductsProvider>
    </Provider>
  );
}

export default App;
