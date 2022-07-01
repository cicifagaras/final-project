import React from 'react'
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { Desktop1 } from "./Desktop1";
import { Desktop2 } from "./Desktop2";
import { Desktop3 } from "./Desktop3";
import Admin from "./components/Admin";
import ProductsCategory from './components/ProductsCategory';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
// import Layout from './Layout';


function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Desktop1/>} />

          <Route path="/desktop-2" element={<Desktop2 />} />

          <Route path="/desktop-3" element={<Desktop3 />} />

          <Route path="/admin/*" element={<Admin />} />

          <Route path="/productsCategory" element={<ProductsCategory />} />

          <Route path="/productPage" element={<ProductPage />} />

          <Route path='/cartPage' element={<CartPage />} />

      </Routes>
    </BrowserRouter>


  );
}
export default App;
