import { useEffect, useState, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { carServiceFactory } from '../../servises/carService';
import * as commentService from '../../servises/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';

//import { AddComment } from './AddComment/AddComment';
//import { carReducer } from '../../reducers/carReducer';
import { useCarContext } from '../../contexts/CarContext';
//import { Buttons } from './AddComment/Buttons';
import { createLike, getAllLikes } from '../../servises/likeService';


import descrCar from "./carDetails.module.css" 
 export const CarDetails = () =>
  
  
  
  
  
  
  {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slides = [
    { src: 'https://cdn2.focus.bg/mobile/photosorg/131/1/big1/11707513484851131_TD.jpg', caption: 'Caption Text' },
    { src: 'https://cdn2.focus.bg/mobile/photosorg/131/1/big1/11707513484851131_uP.jpg', caption: 'Caption Two' },
    { src: 'https://cdn2.focus.bg/mobile/photosorg/131/1/big1/11707513484851131_Jj.jpg', caption: 'Caption Three' },
    { src: 'https://cdn2.focus.bg/mobile/photosorg/131/1/big1/11707513484851131_Jj.jpg', caption: 'Caption Three' }
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
        <p>Модел: BMW 320</p>
        <p>Цена: $100 000</p>
        <p>Описание: ...</p>

      </div>
      </div>
    </>
  );
};

