import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import logo from "./Img/logoTienda.png"
import SectionCart from './components/cart/SectionCart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './context/cartContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
  

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar logo={logo}></Navbar>
          <Routes>
            <Route path="/lambing" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<SectionCart />} />
            <Route path="*" element={<h1>Error 404: Está página no existe</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>

  );
}
export default App;
