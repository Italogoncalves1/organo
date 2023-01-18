import React from 'react'
import './index.css'

import ImgBanner from  '../../assets/banner.png'
const Banner = () => {
  return (
    <header className='banner'>
       <img src={ImgBanner} alt='O banner principal da página do Organo' />
    </header>  
  )
}

export default Banner