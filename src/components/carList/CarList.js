import { useCarContext } from "../../contexts/CarContext";

import { Car } from "../car/Car";

import list from './CarList.module.css';

export const CarList = () => {
    const{cars} = useCarContext();

    console.log(cars);
    

    return (
        <section>
           
             <div className={list.rap}>
             <h1 style={{textAlign:"center", color:"red"}}>All Cars</h1>
            {cars.map(x =>
                <Car key={x._id} {...x} />
            )}
            </div>

            {cars.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
};