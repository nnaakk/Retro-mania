import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuthContext} from '../contexts/AuthContext'
import { carServiceFactory } from '../servises/carService';

export const CarContext = createContext();




export const CarProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [cars, setCars] = useState([]);
    const carService = carServiceFactory();
    let { isAuthenticated } = useAuthContext()

    useEffect(() => {
        carService.getAll()
            .then(result => {
                setCars(result)
            })
    }, []);

    const onCreateCarSubmit = async (data) => { 

        console.log(isAuthenticated);
        
        if(isAuthenticated){
        const newCar = await carService.create(data);

        setCars(state => [...state, newCar]);
        navigate('/carlist');
      
        } else {
        navigate('/login');
        return
      }
        
    };

    const onCarEditSubmit = async (values) => {
        const result = await carService.edit(values._id, values);

        setCars(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/carList/${values._id}`);
    };

    const deleteCar = (gameId) => {
        setCars(state => state.filter(game => game._id !== gameId));
    };

    const getCar = (gameId) => {
        return cars.find(game => game._id === gameId);
    };

    const contextValues = {
        cars,
        onCreateCarSubmit,
        onCarEditSubmit,
        deleteCar,
        getCar,
    };

    return (
        <CarContext.Provider value={contextValues}>
            {children}
        </CarContext.Provider>
    );
};

export const useCarContext = () => {
    const context = useContext(CarContext);

    return context;
};