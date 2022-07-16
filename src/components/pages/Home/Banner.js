import React from 'react'
import './styles/Banner.scss'
import { FormattedMessage } from 'react-intl'

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='data' data-aos="zoom-in">
        <h1 >Agnesa Ujkani</h1>
         <h3>React js Developer</h3>
         <p><FormattedMessage id='title5'></FormattedMessage> </p>
      </div>
    </div>
  )
}

export default Banner