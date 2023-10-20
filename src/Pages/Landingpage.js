import React from 'react'
import Area from '../Components/Area'
import Clients from '../Components/Clients'
import Company from '../Components/Company'
import Emergency from '../Components/Emergency'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Map from '../Components/Map'
import News from '../Components/News'
import Projects from '../Components/Projects'
import Services from '../Components/Services'
import Slider from '../Components/Slider'
import Testimonial1 from '../Components/Testimonial1'
import Touch1 from '../Components/Touch1'
import Work from '../Components/Work'

function Landingpage() {
  return (
    <div>
       <Header/>
       <Slider/>
       <Company/>
       <Services/>
       <Projects/>
       <Work/>
       <Testimonial1/>
       <News/>
       <Area/>
       <Touch1/>
       <Map/>
       <Clients/>
       <Emergency/>
       <Footer/>


    </div>
  )
}

export default Landingpage