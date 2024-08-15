import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCarContext } from "../../contexts/CarContext"

import { useForm } from "../../hooks/useForm";

import { useService } from "../../hooks/useService";

import { carServiceFactory } from "../../servises/carService"

import ediscr from "./EditCar.module.css"

import {useAuthContext} from "../../contexts/AuthContext"

export const EditCar = () => {
  const userEmail = useAuthContext()
    const { onCarEditSubmit } = useCarContext();
    const { carId } = useParams();
    const carService = useService(carServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        userEmail: {userEmail},
        _id:'',
        make: '',
        price: '',
        imgUrl1: '',
        imgUrl2: '',
        imgUrl3: '',
        imgUrl4: '',
        engine: 'diesel',
        gearBox: 'manual',
        year: '',
        power: '',
        volume: '',
        mileage: '',
        char: '',
        summary: '',
        model: '',
       type:"",
       color: ""
    }, onCarEditSubmit);

    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                changeValues(result);
            });
    }, [carId]);

console.log(values.imgUrl1);

    


    return (

        <section className={ediscr.body} >
        <form method='post' onSubmit={onSubmit}>
          <div className={ediscr.container}>
            <h1>Edit CAR</h1>
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
             <label htmlFor="model">
              <b>Model</b>
            </label>
            <input
              type="text"
              placeholder="Enter Model"
              name="model"
              id="model"
              required=""
              value={values.model}
              onChange={changeHandler}
            />
             <label htmlFor="type">
              <b>Type</b>
            </label>
            <input
              type="text"
              placeholder="Enter Type"
              name="type"
              id="type"
              required=""
              value={values.type}
              onChange={changeHandler}
            />
            <label htmlFor="color">
              <b>Color</b>
            </label>
            <input
              type="text"
              placeholder="Enter Color"
              name="color"
              id="color"
              required=""
              value={values.color}
              onChange={changeHandler}
            />
              <label htmlFor="imgUrl1">
              <b>Image1</b>
            </label>
            <input
              type="text"
              placeholder="Enter imgUrl"
              name="imgUrl1"
              id="imgUrl1"
              required=""
              value={values.imgUrl1}
              onChange={changeHandler}
            />
             <label htmlFor="imgUrl2">
              <b>Image2</b>
            </label>
            <input
              type="text"
              placeholder="Enter imgUrl"
              name="imgUrl2"
              id="imgUrl2"
              required=""
              value={values.imgUrl2}
              onChange={changeHandler}
            />
             <label htmlFor="imgUrl3">
              <b>Image3</b>
            </label>
            <input
              type="text"
              placeholder="Enter imgUrl"
              name="imgUrl3"
              id="imgUrl3"
              required=""
              value={values.imgUrl3}
              onChange={changeHandler}
            />
             <label htmlFor="imgUrl4">
              <b>Image4</b>
            </label>
            <input
              type="text"
              placeholder="Enter imgUrl"
              name="imgUrl4"
              id="imgUrl4"
              required=""
              value={values.imgUrl4}
              onChange={changeHandler}
            />
             <label htmlFor="engine">
              <b>Engine</b>
            </label>
            <select
              
              name="engine"
              id="engine"
              required=""
              value={values.engine}
              onChange={changeHandler}>
              <option value="diesel">Disel</option>
              <option value="benzin">benzin</option>
              <option value="lpg">LPG</option>
              <option value="electric">Electric</option>
              </select>

            
              <label htmlFor="gearBox">
              <b>Gear Box</b>
            </label>
            <select
              
              name="gearBox"
              id="gearBox"
              required=""
                 value={values.gearBox}
                 onChange={changeHandler}>
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
              <option value="semiAutomatic">Semiautomatic</option>
             
             
              </select>
            <br/>
             <label htmlFor="price">
              <b>Price</b>
            </label>
            <input
              type="Number"
              placeholder="Enter Price"
              name="price"
              id="price"
              required=""
              value={values.price}
              onChange={changeHandler}
            />
             <label htmlFor="year">
              <b>Year</b>
            </label>
            <input
              type="Number"
              placeholder="Enter Year"
              name="year"
              id="year"
              required=""
              value={values.year}
              onChange={changeHandler}
            />
             <label htmlFor="power">
              <b>Power</b>
            </label>
            <input
              type="Number"
              placeholder="Enter Power"
              name="power"
              id="power"
              required=""
              value={values.power}
              onChange={changeHandler}
            />
              <label htmlFor="volume">
              <b>Volume</b>
            </label>
            <input
              type="Number"
              placeholder="Enter Volume"
              name="volume"
              id="volume"
              required=""
              value={values.volume}
              onChange={changeHandler}
            />
              <label htmlFor="mileage">
              <b>Mileage</b>
            </label>
            <input
              type="Number"
              placeholder="Enter Mileage"
              name="mileage"
              id="mileage"
              required=""
              value={values.mileage}
              onChange={changeHandler}
            />
            
              <label htmlFor="char">
              <p >Char</p>
            </label>
            <textarea
              type="textarea"
              placeholder="Enter Char..."
              name="char"
              id="char"
              rows="10"
              cols="70"
              required=""
              value={values.char}
              onChange={changeHandler}
              >
              </textarea>
              <label htmlFor="summary">
              <p >Summary</p>
            </label>
            <textarea
              type="textarea"
              placeholder="Enter Summary..."
              name="summary"
              id="summari"
              rows="10"
              cols="70"
              required=""
              value={values.summary}
              onChange={changeHandler}
              >
              </textarea>
            
            <hr />
           
            <button type="submit" className={ediscr.registerbtn}>
             Edit
            </button>
          </div>
         
        </form>
        </section>

    )
}