import headCss from './Header.module.css'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
export const Header = () => {
  const {isAuthenticated, userEmail} = useContext(AuthContext)
    return (
     
     
      <ul className={headCss.ul}>
        <li className={headCss.li}><Link  to="/" className={headCss.a} >Home</Link></li>
        {isAuthenticated && (
          <>
           <span style={{color: 'white',fontSize: '30px'}}>{userEmail}</span>
        <li className={headCss.li}><Link to="/imiges" className={headCss.a}>Imiges</Link></li>
        <li className={headCss.li}><Link to="/logout" className={headCss.a}>Logout</Link></li>
        </>
         )}
         {!isAuthenticated && (
          <>
        <li className={headCss.li}><Link to="/register" className={headCss.a}>Register</Link></li>
        <li className={headCss.li}><Link to="/login" className={headCss.a}>Login</Link></li>
        </>
         )}
      </ul>
      
    
      
    )
       
}