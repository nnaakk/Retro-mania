import React from 'react';
export const Car = () => {
  return (
    <div className="item-container">
       
      <div className="item">
      <hr />
        <div className="photo">
          <div className="photo-wrapper">
            <div className="big-photo">
           
              <a href="#" className="image-link">
                
                <img
                  src="data:image/jpeg;base64,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"
                  className="main-pic"
                  alt="BMW 320"
                />
              </a>
            </div>
           
            <div className="links">
              <a href="#" className="details-link">Повече детайли <strong>и 13 снимки</strong></a>
              <a href="#" className="save-link" title="Добави в бележника">Добави в бележника</a>
            </div>
          </div>
        </div>
        <div className="text">
          <div className="header">
            <a href="#" className="title-link">BMW 320 E90 177кс</a>
            <div className="price">
              <div>8 500 лв.</div>
            </div>
            <div className="like">
              <a href="#" title="Add to wishlist" className="like-button"></a>
            </div>
          </div>
          <div className="params">
            <span>✓ Декември 2007 г.</span> <span>✓ 200 000 км</span>
            <span>✓ Светло сив</span> <span>Дизелов</span> <span>✓ 177 к.с.</span>
            <span>✓ Евро 3</span> <span>✓ 2000 куб.см</span> <span>✓ Ръчна</span>
            <span>✓ Седан</span>
          </div>
          <div className="info">
            Особености - 4/5 Врати, Auto Start Stop function, USB, аудио/видео, IN/AUX изводи,
            Автоматичен контрол на стабилността, Безключово палене, Блокаж на диференциала, …
          </div>
          <div className="seller">
            <div className="seller-info">
              <div className="seller-name"><a href="#">Регион: обл. Русе, гр. Русе</a></div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};