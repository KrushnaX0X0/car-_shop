import React from 'react'
import "./Mcard.css"
import {CARDBTN} from '../config/data'

function Mcard({img,title,prise}) {
  return (
    <div className='continer'>
    <img src={img} className="img-product"></img>
    <p className='info'>{title}</p>
    <p className='prise'>₹{prise}</p>
    <button className='btn'>{CARDBTN}</button>

    </div>
  )
}

export default Mcard