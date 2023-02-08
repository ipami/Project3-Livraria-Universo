import './css/App.css';
import { Outlet } from 'react-router-dom';
import { CartProvider } from './component/CartContext';


function App() {

  return (<CartProvider>
    <div className="App">

      <Outlet />

    </div>
  </CartProvider>
  )
}

export default App;
