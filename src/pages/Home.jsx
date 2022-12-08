import React from 'react'
import { Announcements } from '../components/Announcements';
import Navbar from "../components/Navbar";
import { Slider } from '../components/Slider';

const HomePage = () => {
  return (
    <div>
    <Announcements/>
    <Navbar/>
    <Slider/>
    </div>
  )
}

export default HomePage