import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Allrooms from "./pages/Allrooms/Allrooms";
import RoomDetails from "./pages/roomDetails/roomDetails";
import MyBookings from "./pages/MyBookings/MyBookings";
import HotelReg from "./Components/HotelReg/HotelReg";
import Layout from "./pages/HotelOwner/Layout";
import Dashboard from "./pages/HotelOwner/Dashboard";
import AddRoom from "./pages/HotelOwner/AddRoom";
import ListRoom from "./pages/HotelOwner/ListRoom";

const App = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      {false && <HotelReg />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Allrooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-room" element={<AddRoom />} />
          <Route path="list-room" element={<ListRoom />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
