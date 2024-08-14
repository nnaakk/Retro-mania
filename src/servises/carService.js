import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/cars';

export const carServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);

        
        let cars = Object.values(result);
         if(cars.length){console.log(cars)}
        
        
        return cars;
    };
    
    const getOne = async (carId) => {
        const result = await request.get(`${baseUrl}/${carId}`);
    
        return result;
    };
    
    const create = async (carData) => {
        const result = await request.post(baseUrl, carData);
    
        console.log(result);
    
        return result;
    };
    
    const edit = (carId, data) => request.put(`${baseUrl}/${carId}`, data);

    const deleteCar = (carId) => request.delete(`${baseUrl}/${carId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteCar,
    };
}