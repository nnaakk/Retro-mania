import React, { useState } from 'react';

 export const CarDetails = () => {
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
    <div className="details-container">
        <h2 className="detailsh2">Детайли</h2>
      <div className="slideshow-container" style={{ maxWidth: '500px', margin: '0 auto' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`mySlides fade2 ${index === currentSlide ? 'active' : ''}`}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <div className="numbertext2">{index + 1} / {slides.length}</div>
            <img 
              src={slide.src} 
              style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', cursor: 'pointer' }} 
              alt={`Slide ${index + 1}`} 
              onClick={openModal} 
            />
          </div>
        ))}

        <a className="prev2" onClick={prevSlide}>&#10094;</a>
        <a className="next2" onClick={nextSlide}>&#10095;</a>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot2 ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={slides[currentSlide].src} alt={`Slide ${currentSlide + 1}`} />
        </div>
      )}

      <div className="carDescription">
        <p>Модел: BMW 320</p>
        <p>Цена: $100 000</p>
        <p>Описание: ...</p>

      </div>
      </div>
    </>
  );
};

