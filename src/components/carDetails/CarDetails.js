import { useEffect, useState, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { carServiceFactory } from '../../servises/carService';
import * as commentService from '../../servises/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';

import { AddComment } from '../comments/AddComments/AddComments';
import { carReducer } from '../../redusers/carReduser';
import { useCarContext } from '../../contexts/CarContext';
//import { Buttons } from './AddComment/Buttons';
import { createLike, getAllLikes } from '../../servises/likeService';

import { Buttons } from '../comments/Buttons'; 
import descrCar from "./carDetails.module.css" 

 export const CarDetails = () =>
  
  
  
  
  
  
  {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {carId} = useParams()
  const { userId, isAuthenticated, userEmail } = useAuthContext();
  const { deleteCar } = useCarContext();
  const [car, dispatch] = useReducer(carReducer, {});
  const carService = useService(carServiceFactory)
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
        carService.getOne(carId),
        commentService.getAllComments(carId),
        getAllLikes(carId)
    ]).then(([carData, comments,likes]) => {
        const carState = {
            ...carData,
            comments,
            likes
        };
       
        dispatch({type: 'CAR_FETCH', payload: carState})
        console.log(carState);
        return carState
    });
}, [carId]);

console.log(car);


const isOwner = car._ownerId === userId;


  const slides = [
    { src: `${car.imgUrl1}`, caption: 'Caption Text' },
    { src: `${car.imgUrl2}`, caption: 'Caption Two' },
    { src: `${car.imgUrl3}`, caption: 'Caption Three' },
    { src: `${car.imgUrl4}`, caption: 'Caption four' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  const onDeleteClick = async () => {
    // eslint-disable-next-line no-restricted-globals
    const result = confirm(`Are you sure you want to delete ${car.make}`);
    if (result) {
        await carService.delete(car._id);

       // deleteCar(car._id);

        navigate('/carList');
    }
};

  const onDeleteComment = (commentId) => {
    // eslint-disable-next-line no-restricted-globals
    const res = confirm(`Are you sure you want to delete comment?`)
console.log(commentId);

   if(res) {
  commentService.terminate(commentId)
  dispatch({
    type: 'COMMENT_DEL',
    payload: commentId,
    
});
   }
}


  const onLike =  async () => {
    console.log(car._id);
    
    const liked = await getAllLikes(carId)
     if(liked){
      console.log(liked);
      
     let likedCar = liked.filter(x => x._ownerId === userId)

     console.log(likedCar);
     
     if (likedCar.length){


      return alert(`You alreary liked this car.`)
     }
     }
     const result = await createLike(car,{like:1})
     console.log(result);
     
      dispatch({
          type: 'LIKE_ADD',
          payload: result
          
      });
      if(car.likes.length){
      car.likes = [...car.likes,]    
      console.log('I like this car.');
      return car.likes
  }
}
  return (
    <>
    <div className={descrCar.detailsContainer}>
        <h2 className={descrCar.detailsh2}>Детайли</h2>
      <div className={descrCar.slideshowContainer} style={{ maxWidth: '500px', margin: '0 auto' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${descrCar.mySlides} ${descrCar.fade2} ${index === currentSlide ? 'active' : ''}`}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <div className={descrCar.numbertext2}>{index + 1} / {slides.length}</div>
            <img 
              src={slide.src} 
              style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', cursor: 'pointer' }} 
              alt={`Slide ${index + 1}`} 
              onClick={openModal} 
            />
          </div>
        ))}

        <a className={descrCar.prev2} onClick={prevSlide}>&#10094;</a>
        <a className={descrCar.next2} onClick={nextSlide}>&#10095;</a>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${descrCar.dot2} ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

      {isModalOpen && (
        <div className={descrCar.modal} onClick={closeModal}>
          <span className={descrCar.close}>&times;</span>
          <img className={descrCar.modalContent} src={slides[currentSlide].src} alt={`Slide ${currentSlide + 1}`} />
        </div>
      )}

      <div className={descrCar.carDescription}>
        <p>Модел: {car.make} {car.model}</p>
        <p>Цена: ${car.price}</p>
        <p>Описание: {car.summary}</p>

      </div>

     
      <div>
       
        {isOwner && (  <Link to={`/carList/${car._id}/edit`} className="button">Edit</Link>)}
                      
                       
        {isOwner && (<button className="button" onClick={onDeleteClick}>Delete</button>)}             
                        
        {isAuthenticated && <Link to={`/carList/${car._id}/comment`} >Add comment</Link>}
       {isAuthenticated && <button onClick={onLike}>Like</button>}
        
        {car.likes && <p>Likes: {`${car.likes.length}`} </p>}
      </div>

      <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {car.comments && car.comments.map(x => (

                           // isComAwner = x.author._id === user._id
                            
                            <li key={x._id} className="comment">
                                
                                <p>{x.author.email}: {x.comment}</p>
                                { x.author._id === userId &&  <Buttons onDeleteComment={onDeleteComment} carId={car._id} commentId={x._id}/>}
                              
                              
                            </li>   
                            
                        ))}
                    </ul>

                    {!car.comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

      </div>

     
    </>
  );
};

