import './css/App.css';
import Navbar from './component/Navbar';
import Footer from  './component/Footer';
import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import Logo from './images/logo.png';

function App() {

  return (
    <div className="App">
      <Outlet/>
      <Footer logo={Logo}/>
    </div>
  )
}

export default App;
