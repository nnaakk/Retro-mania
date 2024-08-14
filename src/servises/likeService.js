import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/likes';
const request = requestFactory();

export const createLike = async (carId, like) => {

    
    const result = await request.post(baseUrl, { carId, like });


    return result;
};

export const getAllLikes = async (carId) => {
   
     const result = await request.get(`${baseUrl}`);
     console.log(result[0].carId._id);
     
     const likes = result.filter(x => x.carId._id === carId)
     return likes;
};