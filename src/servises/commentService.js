
import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/comments';
const request = requestFactory();

export const getAllComments = async (carId) => {
    const searchQuery = encodeURIComponent(`carId="${carId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;
};

export const getOneComment = async (commentId) => {
    const result = await request.get(`${baseUrl}`);
    const fresult = result.filter(x => x._id === commentId)

    // console.log(fresult[0]);

    return fresult;
};

export const createComment = async (carId, comment) => {
    const result = await request.post(baseUrl, { carId, comment });
    console.log(result);

    return result;
};
export const editComment = async (commentId, comment, carId) => {
    const result = request.put(`${baseUrl}/${commentId}`, { carId, comment })
    return result

}
export const terminate = (comentId) => {
    console.log(comentId);
    request.delete(`${baseUrl}/${comentId}`);
}