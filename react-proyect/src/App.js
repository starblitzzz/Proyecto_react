import logo from './logo.svg';
import './App.css';
import Require from "./views/Require";
import Productlist from "./views/Productslist"
import Cart from './views/Cart';
import {onSubmit} from "./views/Require"
import {requireContext} from "./context/context"
import { FormDataProvider } from './context/context';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { CartProvider } from './context/CartContext';

function App() {

const routes= createBrowserRouter([
  {
    path:"/",
    element: <Require/>, 
    errorElement:<div>"oops hubo un problema"</div>
  },
  {
    path:"/list",
    element: <Productlist/>, 
    errorElement:<div>"oops hubo un problema no se pudo cargar el listado de productos"</div>
  },
  {
    path:"/cart",
    element: <Cart/>, 
    errorElement:<div>"oops hubo un problema no se pudo cargar el carrito de compras"</div>
  }
])
  

  return (
    <CartProvider>
    <FormDataProvider>
    <RouterProvider router={routes}/>
    </FormDataProvider>
    </CartProvider>
  );
}

export default App;
