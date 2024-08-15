import { Routes, Route, Link } from "react-router-dom"
import { AuthProvider } from './contexts/AuthContext';
import { CarProvider } from "./contexts/CarContext";


import { Home } from './components/home/Home'
import { Header } from "./components/header/Header";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import { Logout } from "./components/logaut/Logaut";
import { Footer } from "./components/footer/Footer"
import { DescribeCar } from "./components/describeCar/DescribeCar"
import { EditCar } from "./components/EditCar/EditCar"
import { CarDetails } from './components/CarDetails/CarDetails'
import { CarList } from "./components/carList/CarList"
import { AddComment } from "./components/comments/AddComments/AddComments";
import { EditComment } from "./components/comments/EditComments/EditComment";
import { useAuthContext } from "./contexts/AuthContext";
import { RouteGard } from "./components/gards/RouteGuard";
import { RouteGardNo } from "./components/gards/RouteGardNo";
function App() {
  
  
  return (
    <AuthProvider>
      <CarProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/describe" element={
            <RouteGard>
            <DescribeCar />
            </RouteGard>
            } />
          <Route path="/register" element={
            <RouteGardNo>
            <Register />
            </RouteGardNo>
            } />
          <Route path="/login" element={
            <RouteGardNo>
            <Login />
            </RouteGardNo>
            } />
          <Route path="/logout" element={
            <RouteGard>
            <Logout />
            </RouteGard>

            } />
          <Route path="/carlist" element={<CarList />} />
          <Route path="/carlist/:carId" element={<CarDetails />} />
          <Route path="/carlist/:carId/edit" element={<EditCar />} />
          <Route path="/carList/:carId/comment" element={<AddComment />} />
          <Route path='/carComment/:commentId/edit/' element={<EditComment />} />
        </Routes>
        <Footer />
      </CarProvider>
    </AuthProvider>
  );
}

export default App;
