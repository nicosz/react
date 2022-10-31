import './App.css';
import Navbar from './components/navbar/Navbar';
import  ItemListContainer  from './components/Iteamlist/ItemListContainer';


function App() {
  return (
      <div className='App'>
        <Navbar title="hola"></Navbar>
        <ItemListContainer/>
      </div>
  );
}

export default App;
