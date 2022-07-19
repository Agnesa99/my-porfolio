import clsx from "clsx";
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'
import SelectLanguage from '../SelectLanguage/SelectLanguage'
import MobileNav from '../../../components/shared/MobileNav/MobileNav'
import {FiMoon , FiSun} from 'react-icons/fi'
import ThemeSwitcher from './ThemeSwitcher'
import './language.scss'
import { FormattedMessage } from 'react-intl'


const Navbar = (props) => { 
    const [isSticky, setIsSticky] = useState(false);
    const [sidebar, setSidebar]=useState(false);
    const showSidebar=()=>{
        setSidebar(!sidebar)
    }
    const closeSidebar=()=>{
        setSidebar(false)
    }

    useEffect(() => {
    const nav = document.querySelector(".navbar");
    const navHeight = nav.scrollHeight;

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 100 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="navbar" className={clsx("navbar", isSticky ? "nav__sticky" : "")}>
        
            <Link to='/' className='logo-container'>
                <h6>AU</h6>
            </Link>

            <div className='nav-links'>
                <div className='nav-link home-link'>
                    <Link to='/' className='inner-link'><FormattedMessage id='title1'></FormattedMessage> </Link>
                     
                </div>
                <div className='nav-link about-link'>
                    <Link to='/' className='inner-link'><FormattedMessage id='title2'></FormattedMessage></Link>
                    
                </div>
                <div className='nav-link references-link'>
                    <Link to='/' className='inner-link'><FormattedMessage id='title3'></FormattedMessage> </Link>
                </div>
                <div className='nav-link contact-link'>
                    <Link to='/' className='inner-link'><FormattedMessage id='title4'></FormattedMessage></Link>
                </div>
            </div>

            <div className='nav-auth'>
            <SelectLanguage 
            setLanguage={props.setLanguage}
            language={props.language}
            /> 
            <div className='Switch'>
             <ThemeSwitcher />
           </div>
            </div>
            <MobileNav/>
            </div>
            
            
        
       
    )
}

    

export default Navbar