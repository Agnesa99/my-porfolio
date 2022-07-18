import React from 'react'
import {Data3} from './Data'
import './styles/Skills.scss'
import { FormattedMessage } from 'react-intl'

const Skills = () => {
  return (
    <div className='skill-container'>
        <h2> <FormattedMessage id='title16'></FormattedMessage></h2>
        <div className='technologies' data-aos="fade-down">
           {Data3.map((props) => {
               return (
                   <div className='item' data-aos="flip-left">
                    <div className='icon' style={{content: `url(${props.icon})`}}></div>
                    <h4>{props.name}</h4>
                   </div>
               )
           })}
        </div>
    </div>
  )
}

export default Skills