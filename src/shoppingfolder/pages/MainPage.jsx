import React,{useState} from 'react'
import Header from '../components/Header'
import MensCollection from '../components/MensCollection'
import WomenCollection from '../components/WomenCollection'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import {Gents,Ladies} from '../data.js'

const MainPage = () => {
    console.log(Gents);
    const [getnsFashion, setGetnsFashion] = useState(Gents);
    const [womensFashion, setWomensFashion] = useState(Ladies);
  return (
    <div>
      <Header />
      <Banner />
      <MensCollection getnsFashion={getnsFashion} />
      <WomenCollection womensFashion={womensFashion} />
      <Footer />
    </div>
  )
}

export default MainPage
