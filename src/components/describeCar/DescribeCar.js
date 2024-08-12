import { useCarContext } from '../../contexts/CarContext'
import { useAuthContext } from '../../contexts/AuthContext';
import { redirect } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import discrCar from "./DescribeCar.module.css"
export const DescribeCar = () => {

    let {isAutheticated} = useAuthContext
   
    const {onCreateCarSubmit} = useCarContext();
    const { values, changeHandler, onSubmit } = useForm({
        make: '',
        price: '',
        imgUrl: ''
       
    }, onCreateCarSubmit);
   
    return (
        <section className={discrCar.body} >
        <form method='post' onSubmit={onSubmit}>
          <div className={discrCar.container}>
            <h1>Login</h1>
            <p>Please fill in this form to describe your car.</p>
            <hr />
            <label htmlFor="make">
              <b>Make</b>
            </label>
            <input
              type="text"
              placeholder="Enter Make and Model"
              name="make"
              id="make and model"
              required=""
              value={values.make}
              onChange={changeHandler}
            />
            <label htmlFor="price">
              <b>Price</b>
            </label>
            <input
              type="Number"
              placeholder="Enter Price"
              name="price"
              id="price"
              required=""
              value={values.orice}
              onChange={changeHandler}
            />
              <label htmlFor="price">
              <b>Image</b>
            </label>
            <input
              type="text"
              placeholder="Enter imgUrl"
              name="imgUrl"
              id="imgUrl"
              required=""
              value={values.orice}
              onChange={changeHandler}
            />
            <hr />
           
            <button type="submit" className={discrCar.registerbtn}>
             Go
            </button>
          </div>
         
        </form>
        </section>
    );
   
};
