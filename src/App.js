import { Routes, Route, Link } from "react-router-dom"
import { AuthProvider } from './contexts/AuthContext';
import { CarProvider } from "./contexts/CarContext";


import { Home } from './components/home/Home'
import { Header } from "./components/header/Header";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import { Logout } from "./components/logaut/Logaut";
import { Footer } from  "./components/footer/Footer"
import { DescribeCar } from "./components/describeCar/DescribeCar"
import { CarDetails } from './components/CarDetails/CarDetails'
import { CarList } from "./components/carList/CarList"
function App() {

  return (
    <AuthProvider>
<CarProvider>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/describe" element={<DescribeCar/>}  />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="/carlist" element={<CarList/>} />
      <Route path="/carlist/:carId" element={<CarDetails/>} />
      </Routes>
      <Footer />
      </CarProvider>
      </AuthProvider>
  );
}

export default App;
