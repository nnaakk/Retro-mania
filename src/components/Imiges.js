
import './Imiges.css'

import {useState} from 'react'
export const Imiges = () => {

  const [big, setBig] = useState({})

const [dstyle,setDstyle] = useState({display:'block'})

  const img3 ={src:'https://models118.com/9026-thickbox_default/vw-volkswagen-golf-4-red-norev-1-18.webp',alt:""}
  
const img2 = {src:'https://models118.com/9029-thickbox_default/vw-volkswagen-golf-4-red-norev-1-18.webp',alt:'golf'}

const img1 = {src:'https://models118.com/9030-thickbox_default/vw-volkswagen-golf-4-r-norev-1-18.webp',alt:'golf'}

const img4 = {src:'https://models118.com/9025-thickbox_default/vw-volkswagen-golf-4-red-norev-1-18.webp',alt:'golf'}



  
   const onClickr = (e) => {
       setDstyle({display:'block'})
       setBig(e.target.src)
       console.log(big);
       console.log(dstyle);
      }

      const onClickx = (e) => {
        setDstyle({display:'none'})
        console.log(dstyle);
       }
    return (
    <div style={{ backgroundColor: "white" }}>
    <div style={{ textAlign: "center" }}>
    <h2>Tabbed Image Gallery</h2>
    <p>Click on the images below:</p>
  </div>
  {/* The four columns */}
  <div className="row">
  
   
  <div className="column">
      <img
      
        src={img2.src}
        alt="Mountains"
        style={{ width: "100%" }}
        onClick={onClickr}
      />
    </div>
    <div className="column">
      <img
        src={img3.src}
        alt="Mountains"
        style={{ width: "100%" }}
        onClick={onClickr}
      />
    </div>
    <div className="column">
      <img
        src={img4.src}
        alt="Mountains"
        style={{ width: "100%" }}
        onClick={onClickr}
      />
    </div>
    <div className="column">
      <img
        src={img1.src}
        alt="Lights"
        style={{ width: "100%" }}
        onClick={onClickr}
      />
    </div>
  </div>
  <div className="container" style={dstyle}>
    <span
      onClick={onClickx}
      className="closebtn"
    >
      ×
    </span>
    <img id="expandedImg" style={{ width: "100%" }} src={big} alt = '' />
    <div id="imgtext" value={'golf'} />
  </div>
  </div>
    )
}