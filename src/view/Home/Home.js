import React from 'react'
import "./Home.css"

import Mcard from '../../components/Mcard/Mcard'
import { PRODUCT,WEBSITENAME } from '../../components/Config/data'

function Home() {
  return (
    <div>
      <h1 className='title-web'>{WEBSITENAME}</h1>

      <div className='continer-card'>
      {PRODUCT.map((mobile)=>{
      return   <Mcard
          
         title={mobile.title}
         img={mobile.img}
         prise = {mobile.price}
         /> })}

      </div>
        


    </div>
  )
}

export default Home