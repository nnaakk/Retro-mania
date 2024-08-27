import React from 'react';
import { Link } from 'react-router-dom';
import carSt from "./CarHome.module.css";

export const CarHome = ({
  _id,
  make,
  model,
  imgUrl1,
  price
}) => {
  return (
    <div className={carSt.itemContainer}>
      <div className={carSt.item}>
        <hr />
        <div className={carSt.photo}>
          <div className={carSt.photoWrapper}>
            <div className={carSt.bigPhoto}>
              
              <Link to={`/carList/${_id}`} className={carSt.imageLink}>
                <img
                  src={imgUrl1}
                  className={carSt.mainPic}
                  alt={`${make} ${model}`}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={carSt.text}>
          <div className="header">
            <p className={carSt.titleLink}>{make}</p>
            <div className={carSt.price}>
             
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
