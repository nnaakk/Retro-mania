import React from 'react';
import { Link } from 'react-router-dom';
import carStyle from './Car.module.css';

export const Car = ({
  _id,
  make,
  model,
  price,
  imgUrl1,
  year,
  mileage,
  power,
  type
}) => {
  return (
    <div className={carStyle.itemContainer}>
      <div className={carStyle.photo}>
        <img src={imgUrl1} alt={`${make} ${model}`} />
        <Link to={`/carList/${_id}`} className={carStyle.detailsLink}>More details</Link>
      </div>

      <div className={carStyle.text}>
        <div className={carStyle.header}>
          <Link to={`/carList/${_id}`} className={carStyle.titleLink}>{make} {model}</Link>
          <div className={carStyle.price}>${price}</div>
        </div>

        <div className={carStyle.params}>
          <span>{year}</span>
          <span>{mileage} km</span>
          <span>{power} hp</span>
          <span>{type}</span>
        </div>
      </div>
    </div>
  );
};
