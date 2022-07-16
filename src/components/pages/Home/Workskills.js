import React from 'react'
import './styles/Workskills.scss'
import {AiOutlineCheck} from 'react-icons/ai'
import { FormattedMessage } from 'react-intl'

const Workskills = () => {
  return (
    <div className='work-container' data-aos="fade-down">
    <div className='right'>
        <h2><FormattedMessage id='title6'></FormattedMessage></h2>
        <p data-aos="fade-right"><AiOutlineCheck/><FormattedMessage id='title7'></FormattedMessage> </p>
        <p data-aos="fade-left"><AiOutlineCheck/><FormattedMessage id='title8'></FormattedMessage> </p>
        <p data-aos="fade-right"><AiOutlineCheck/> <FormattedMessage id='title9'></FormattedMessage></p>
        <p data-aos="fade-left"> <AiOutlineCheck/><FormattedMessage id='title10'></FormattedMessage> </p>
        <p data-aos="fade-right"><AiOutlineCheck/> <FormattedMessage id='title11'></FormattedMessage></p>
        <p data-aos="fade-left"><AiOutlineCheck/> <FormattedMessage id='title12'></FormattedMessage></p>
    </div>
    </div>
  )
}

export default Workskills