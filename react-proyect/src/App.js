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
import { useForm, FormProvider } from 'react-hook-form';

function App() {
  const methods = useForm();

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
   <FormDataProvider>
    <CartProvider>
    <RouterProvider router={routes}/>
    </CartProvider>
    </FormDataProvider>
  );
}

export default App;
