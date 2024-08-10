import { Routes, Route, Link } from "react-router-dom"
import { AuthProvider } from './contexts/AuthContext';

import { Imiges } from './components/Imiges'

import { Home } from './components/Home'
import { Header } from "./components/Header";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import { Logout } from "./components/logaut/Logaut";
import { Footer } from  "./components/Footer"
import { Car } from "./components/car/Car"
import { CarDetails } from "./components/carDetails/CarDetails";

function App() {

  return (
    <AuthProvider>
    
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/imiges" element={<Car/>}  />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="/details" element={<CarDetails/>} />
      </Routes>

      <Footer />
  
      </AuthProvider>
  );
}

export default App;
