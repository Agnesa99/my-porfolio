import React from 'react'
import Navbar from '../components/shared/Navbar/Navbar'
import Banner from '../components/pages/Home/Banner'
import Skills from '../components/pages/Home/Skills'
import Workskills from '../components/pages/Home/Workskills'
import Experiences from '../components/pages/Home/Experiences'
import Footer from '../components/pages/Home/Footer'

const Home = () => {
  return (
    <div className='home-page'>
     <Navbar/>
     <Banner/>
     <Skills/>
     <Workskills/>
     <Experiences/>
     <Footer/>
    </div>
  )
}

export default Home