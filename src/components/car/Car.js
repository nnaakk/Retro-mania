import React from 'react';

import carStyle from "./Car.module.css"
export const Car = ({
  make,
  price,
  imgUrl
}) => {
  return (
    <div className={carStyle.itemContainer}>
       
      <div className={carStyle.item}>
      <hr />
        <div className={carStyle.photo}>
          <div className={carStyle.photoWrapper}>
            <div className={carStyle.bigPhoto}>
           
              <a href="#" className={carStyle.imageLink}>
                
                <img
                src={imgUrl}
                  className={carStyle.mainPic}
                  alt="BMW 320"
                />
              </a>
            </div>
           
            <div className={carStyle.links}>
              <a href="#" className={carStyle.detailsLink}>Повече детайли <strong>и 13 снимки</strong></a>
             
            </div>
          </div>
        </div>
        <div className={carStyle.text}>
          <div className="header">
            <p className={carStyle.titleLink}>{make}</p>
            <div className={carStyle.price}>
              <div>{price}</div>
            </div>
            <div className={carStyle.like}>
              <a href="#" title="Add to wishlist" className="like-button"></a>
            </div>
          </div>
          <div className={carStyle.params}>
            <span>✓ Декември 2007 г.</span> <span>✓ 200 000 км</span>
            <span>✓ Светло сив</span> <span>Дизелов</span> <span>✓ 177 к.с.</span>
            <span>✓ Евро 3</span> <span>✓ 2000 куб.см</span> <span>✓ Ръчна</span>
            <span>✓ Седан</span>
          </div>
          <div className={carStyle.info}>
            Особености - 4/5 Врати, Auto Start Stop function, USB, аудио/видео, IN/AUX изводи,
            Автоматичен контрол на стабилността, Безключово палене, Блокаж на диференциала, …
          </div>
          <div className={carStyle.seller}>
            
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};