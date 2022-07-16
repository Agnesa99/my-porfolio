import React from 'react'
import {Data1} from './Data'
import './styles/Experiences.scss'
import {Link} from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const Experiences = () => {
  return (
    <div className='experience-container'>
        <h2><FormattedMessage id='title17'></FormattedMessage></h2>
        <div className='top'>
            {Data1.map((props) => {
                return(
                    <div className='card' data-aos="zoom-in-down">
                        <div className='logo' style={{content: `url(${props.logo})`}}></div>
                        <h3>{props.title}</h3>
                        <h2>{props.name}</h2>
                        <p>{props.description}</p>
                        </div>
                )
            })}
        </div>
        <div className='bottom'>
           <div className='respository' data-aos="fade-right">
            <h2><FormattedMessage id='title18'></FormattedMessage></h2>
             <p>https://github.com/Agnesa99/Sudokuu</p>
             <p>https://github.com/Agnesa99/SudokuValidator</p>
            </div> 
            <div className='web' data-aos="fade-left">
                <h2><FormattedMessage id='title19'></FormattedMessage></h2>
                <p>https://albaniaoutsource.netlify.app/</p>
                <p>https://hostlanguage.netlify.app/</p>
                <p>https://hosthelp.netlify.app/</p>
                <p>https://ibcincorporate.netlify.app/</p>
                <p>https://kosova-dresses.netlify.app/</p>
            </div>
        </div>
    </div>
  )
}

export default Experiences