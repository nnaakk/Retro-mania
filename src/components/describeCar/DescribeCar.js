import { useCarContext } from '../../contexts/CarContext';
import { useForm } from '../../hooks/useForm';
import discrCar from "./DescribeCar.module.css";
import { useNavigate } from 'react-router-dom';

export const DescribeCar = () => {
  const navigate = useNavigate()
  const { onCreateCarSubmit } = useCarContext();
  const { values, changeHandler, onSubmit } = useForm({
    make: '',
    model: '',
    type: '',
    color: '',
    price: '',
    year: '',
    power: '',
    volume: '',
    mileage: '',
    char: '',
    summary: '',
    imgUrl1: '',
    imgUrl2: '',
    imgUrl3: '',
    imgUrl4: '',
    engine: 'diesel',
    gearBox: 'manual'
  }, onCreateCarSubmit);

  const handleClose = () => {
    // Add functionality to close the form or navigate to a different page
    navigate('/');
    return
    
  };

  return (
    <section className={discrCar.body}>
      <button className={discrCar['close-btn']} onClick={handleClose}>CLOSE</button> {/* Бутон за затваряне */}
      <form method='post' onSubmit={onSubmit}>
        <div className={discrCar.container}>
          <h1>Describe Your Car</h1>
          <p>Please fill in this form to describe your car.</p>
          <hr />

          <label htmlFor="make"><b>Make</b></label>
          <input type="text" name="make" id="make" required value={values.make} onChange={changeHandler} />

          <label htmlFor="model"><b>Model</b></label>
          <input type="text" name="model" id="model" required value={values.model} onChange={changeHandler} />

          <label htmlFor="type"><b>Type</b></label>
          <input type="text" name="type" id="type" required value={values.type} onChange={changeHandler} />

          <label htmlFor="color"><b>Color</b></label>
          <input type="text" name="color" id="color" required value={values.color} onChange={changeHandler} />

          <label htmlFor="price"><b>Price</b></label>
          <input type="number" name="price" id="price" required value={values.price} onChange={changeHandler} />

          <label htmlFor="year"><b>Year</b></label>
          <input type="number" name="year" id="year" required value={values.year} onChange={changeHandler} />

          <label htmlFor="power"><b>Power</b></label>
          <input type="number" name="power" id="power" required value={values.power} onChange={changeHandler} />

          <label htmlFor="volume"><b>Volume</b></label>
          <input type="number" name="volume" id="volume" required value={values.volume} onChange={changeHandler} />

          <label htmlFor="mileage"><b>Mileage</b></label>
          <input type="number" name="mileage" id="mileage" required value={values.mileage} onChange={changeHandler} />

          <label htmlFor="imgUrl1"><b>Image 1</b></label>
          <input type="text" name="imgUrl1" id="imgUrl1" required value={values.imgUrl1} onChange={changeHandler} />

          <label htmlFor="imgUrl2"><b>Image 2</b></label>
          <input type="text" name="imgUrl2" id="imgUrl2" required value={values.imgUrl2} onChange={changeHandler} />

          <label htmlFor="imgUrl3"><b>Image 3</b></label>
          <input type="text" name="imgUrl3" id="imgUrl3" required value={values.imgUrl3} onChange={changeHandler} />

          <label htmlFor="imgUrl4"><b>Image 4</b></label>
          <input type="text" name="imgUrl4" id="imgUrl4" required value={values.imgUrl4} onChange={changeHandler} />

          <label htmlFor="engine"><b>Engine</b></label>
          <select name="engine" id="engine" required value={values.engine} onChange={changeHandler}>
            <option value="diesel">Diesel</option>
            <option value="petrol">Petrol</option>
            <option value="lpg">LPG</option>
            <option value="electric">Electric</option>
          </select>

          <label htmlFor="gearBox"><b>Gear Box</b></label>
          <select name="gearBox" id="gearBox" required value={values.gearBox} onChange={changeHandler}>
            <option value="manual">Manual</option>
            <option value="automatic">Automatic</option>
            <option value="semiAutomatic">Semiautomatic</option>
          </select>

          <label htmlFor="char"><b>Char</b></label>
          <textarea name="char" id="char" rows="3" required value={values.char} onChange={changeHandler}></textarea>

          <label htmlFor="summary"><b>Summary</b></label>
          <textarea name="summary" id="summary" rows="3" required value={values.summary} onChange={changeHandler}></textarea>

          <hr />
          <button type="submit" className={discrCar.registerbtn}>Go</button>
        </div>
        </form>
    </section>
  );
};
