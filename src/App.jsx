import Navbar from './Components/Navbar/Navbar';
import { Routes, Route , useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './Components/Footer/Footer';
import Allrooms from './pages/Allrooms/Allrooms';

const App = () => {

const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar/> }
      <Routes>
      <Route path='/' element={<Home/>} />
            <Route path='/rooms' element={<Allrooms/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App