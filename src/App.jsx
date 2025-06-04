import Navbar from './Components/Navbar/Navbar';
import { Routes, Route , useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Allrooms from './pages/Allrooms/Allrooms';
import RoomDetails from './pages/roomDetails/roomDetails';
import MyBookings from './pages/MyBookings/MyBookings';
import HotelReg from './Components/HotelReg/HotelReg';

const App = () => {

const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar/> }
      {false && <HotelReg/>}
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/rooms' element={<Allrooms/>} />
       <Route path='/rooms/:id' element={<RoomDetails/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App