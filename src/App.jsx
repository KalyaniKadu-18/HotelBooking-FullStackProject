import Navbar from './Components/Navbar/Navbar';
import { Routes, Route , useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Allrooms from './pages/Allrooms/Allrooms';
import RoomDetails from './pages/roomDetails/roomDetails';

const App = () => {

const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar/> }
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/rooms' element={<Allrooms/>} />
       <Route path='/rooms/:id' element={<RoomDetails/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App