import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { CgClose } from 'react-icons/cg'
import {FiMoon , FiSun} from 'react-icons/fi'
import ThemeSwitcher from '../Navbar/ThemeSwitcher'
import SelectLanguage from '../SelectLanguage/SelectLanguage'
import { FormattedMessage } from 'react-intl'




const Sidebar = (props) => {    

    

    return (
        <div className='mobile-sidebar'>
             <div className='sidebar-logo-row'>
                <Link to='/'>
                    <div className='mobile-logo-container'></div>
                    <h6>Agnesa Ujkani</h6>
                </Link>
                <button onClick={props.click}><CgClose/> </button>
            </div>

            <div className='mobile-sidebar-links'>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' >
                        <Link to='/' className='nav-anchor'>
                        <FormattedMessage id='title1'></FormattedMessage>
                        </Link>
                    </div>
                    
                </div>

                <div className='nav-sidebar-link' >
                    <Link to='/' className='nav-anchor'>
                    <FormattedMessage id='title2'></FormattedMessage>
                    </Link>
                    
                </div>
                
                <div className='nav-sidebar-link'  >
                    <Link to='/' className='nav-anchor'>
                    <FormattedMessage id='title3'></FormattedMessage>
                    </Link>
                  
                </div>
               
                <div className='nav-sidebar-link'>
                    <Link to='/' className='nav-anchor'>
                    <FormattedMessage id='title4'></FormattedMessage>
                    </Link>
                   
                </div>
               
               
            </div>
            <div className='sidebar-auth'>
            <SelectLanguage 
            setLanguage={props.setLanguage}
            language={props.language}
            /> 
            <div className='Switch'>
           <h3><FiSun/>  </h3>
          <ThemeSwitcher />
          <h3> <FiMoon/></h3>
           </div>  
            </div>

            <div className='space'></div>
        </div>
    )
}

export default Sidebar