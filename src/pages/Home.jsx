import React from 'react'
import { Announcements } from '../components/Announcements';
import { Categories } from '../components/Categories';
import Navbar from "../components/Navbar";
import { Products } from '../components/Products';
import { Newsletter } from '../components/Newsletter';
import { Slider } from '../components/Slider';
import { Footer } from '../components/Footer';

const HomePage = () => {
  return (
    <div>
    <Announcements/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default HomePage