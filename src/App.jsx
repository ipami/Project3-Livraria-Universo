import './css/App.css';
import Footer from  './component/Footer';
import { Outlet } from 'react-router-dom';
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
