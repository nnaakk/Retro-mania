import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import carStyle from "./Car.module.css"
export const Car = ({
  make,
  model,
  type,
  color,
  price,
  imgUrl1,
  imgUrl2,
  imgUrl3,
  imgUrl4,
  engine,
  gearBox,
 volume,
  year,
  power,
  char,
  summary,
  mileage

  

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
                src={imgUrl1}
                  className={carStyle.mainPic}
                  alt="BMW 320"
                />
              </a>
            </div>
           
            <div className={carStyle.links}>
              <Link to ="/details" className={carStyle.detailsLink}>Повече детайли <strong>и 4 снимки</strong></Link>
             
            </div>
          </div>
        </div>
        <div className={carStyle.text}>
          <div className="header">
            <p className={carStyle.titleLink}>{make} {model}</p>
            <div className={carStyle.price}>
              <div>$ {price}</div>
            </div>
            <div className={carStyle.like}>
              <a href="#" title="Add to wishlist" className="like-button"></a>
            </div>
          </div>
          <div className={carStyle.params}>
            <span>✓ {year} y.</span> <span>✓  km</span>
            <span>✓{color}</span> <span>✓{engine}</span> <span>✓ {power} hp</span>
            <span>✓ {mileage} km</span> <span>✓{volume} cm3</span> <span>✓ {gearBox}</span>
            <span>✓ {type}</span>
          </div>
          <div className={carStyle.info}>
           Char: {char}
          </div>
          <Link to={'/details'} >Details</Link>
          <div className={carStyle.seller}>
            
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};