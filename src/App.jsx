import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar title="lambing"></Navbar>

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>Error 404: Está página no existe</h1>} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;
