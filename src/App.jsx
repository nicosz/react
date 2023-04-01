import Navbar from './components/navbar/Navbar.jsx';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import logo from "./Img/logoTienda.png"
import SectionCart from './components/SectionCart/SectionCart';
import ThankYou from './components/ThankYou/ThankYou';
import { AuthContextProvider } from './login/authcontext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './context/cartContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <AuthContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar logo={logo}></Navbar>
            <Routes>
              <Route path="/home" element={<ItemListContainer />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/producto/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<SectionCart />} />
              <Route path="/thankyou/:id" element={<ThankYou />} />
              <Route path="*" element={<h1>Error 404: Está página no existe</h1>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </AuthContextProvider>
    </div>

  );
}
export default App;
