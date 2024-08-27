import { useCarContext } from "../../contexts/CarContext";
import { Car } from "../car/Car";
import { Header } from "../header/Header"; // Импортиране на Header компонента
import list from './CarList.module.css';

export const CarList = () => {
    const { cars } = useCarContext();

    return (
        <section>
            <Header /> {/* Добавяне на Header компонента */}
            <div className={list.rap}>
                <h1 style={{ textAlign: "center", color: "red" }}>All Cars</h1>
                {cars.length === 0 && (
                    <h3 style={{ textAlign: "center", color: "black" }}>No cars yet</h3>
                )}
                {cars.map(x =>
                    <Car key={x._id} {...x} />
                )}
            </div>
        </section>
    );
};
