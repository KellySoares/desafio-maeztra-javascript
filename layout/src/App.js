import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Layout from './components/layout';
import MainRoutes from './routes';
import ProductsProvider from './providers/products';


function App() {
  const localCart = JSON.parse(localStorage.getItem('reactShopping: cart'))

  if (localCart !== null) {
    store.dispatch({ type: 'CHANGE_CART', localCart })
  }
  return (
    <Provider store={store}>
      <ProductsProvider>
        <Router>

          <Layout >
            <MainRoutes />
          </Layout>
        </Router>
      </ProductsProvider>
    </Provider>
  );
}

export default App;
