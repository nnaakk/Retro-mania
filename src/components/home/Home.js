import homeCss from './Home.module.css'

export const Home = () => {

    return (

        <div >
            <h1 className={homeCss.bodyv}>Retro Club</h1>
            <ul className={homeCss.ul}>
                <li className={homeCss.li} ><a className={homeCss.a} href="/describe">Show your Retto Car hear</a></li>
                <li className={homeCss.li}><a className={homeCss.a} href="/details">Share events wich you visit</a></li>
                <li className={homeCss.li}><a className={homeCss.a} href="/carlist">Explane your Servises</a></li>

            </ul>


        </div>
    )
}