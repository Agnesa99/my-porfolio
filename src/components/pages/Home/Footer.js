import React from 'react'
import './styles/Footer.scss'
import {HiOutlineMail} from 'react-icons/hi'
import {MdPhoneAndroid} from 'react-icons/md'
import {AiOutlineInstagram , AiOutlineTwitter} from 'react-icons/ai'
import {RiFacebookLine,RiLinkedinFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const Footer = () => {
  return (
    <div className='footer-container' data-aos="fade-up"> 
     <h2><FormattedMessage id='title15'></FormattedMessage></h2>
     <h3><MdPhoneAndroid/> + 383 49217190</h3>
     <h3><HiOutlineMail/>agnesaujkani99@gmail.com</h3>
     <div className='links'>
     <Link className='insta' to='/'><AiOutlineInstagram/></Link>
                <Link className='twitter' to='/'><AiOutlineTwitter/></Link>
                <Link className='fb' to='/'><RiFacebookLine/></Link>
                <Link className='in' to='/'><RiLinkedinFill/></Link>
     </div>
    </div>
  )
}

export default Footer