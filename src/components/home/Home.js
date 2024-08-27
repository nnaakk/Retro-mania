import homeCss from './Home.module.css'
import { useCarContext } from '../../contexts/CarContext'
import { CarHome } from '../carHome/CarHome'

export const Home = () => {
    const {cars} = useCarContext() 

    const lastThreeCars = cars.slice(-3);

    return (
        <div>
            <h1 className={homeCss.bodyv}>Retro Club</h1>
            <div className={homeCss.carsTitle}>Last cars</div> 
            <div className={homeCss.carsContainer}>
                {lastThreeCars.map(x =>
                    <CarHome key={x._id} {...x} />
                )}
            </div>
        </div>
    )
}
