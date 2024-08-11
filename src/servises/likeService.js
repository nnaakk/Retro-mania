import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/likes';
const request = requestFactory();

export const createLike = async (carId, like) => {

    
    const result = await request.post(baseUrl, { carId, like });
    return result;
};

export const getAllLikes = async (carId) => {
   
     const result = await request.get(`${baseUrl}`);
     const likes = result.filter(x => x.carId === carId)
     return likes;
};