import { useEffect, useState } from "react"
import Header from "./pages/header/Header";
import { Slider } from './Slider';
import {Sale} from './pages/sale/Sale';
import { Beach } from "./pages/beach/Beach";
import { TopOffer } from "./pages/topOffer/TopOffer";
import { About } from "./pages/about/About";
import { Footer } from "./pages/footer/Footer";
 

export default function App() {

  const [dataSlider, setDataSlider] = useState([]);
  const [dataHeader, setDataHeader] = useState([]);
  const [dataSale, setDataSale] = useState([]);
  const [dataBeach, setDataBeach] = useState([]);
  const [dataOffer, setDataOffer] = useState([]);
  const [dataAbout, setDataAbout] = useState([]);
  const [dataFooter, setDataFooter] = useState([]);


  useEffect(()=>{
    fetch('http://localhost:3000/photos')
    .then(response => response.json())
    .then(data => setDataSlider(data));

    fetch('http://localhost:3000/header')
    .then(response => response.json())
    .then(data => setDataHeader(data[0]));

    fetch('http://localhost:3000/sale')
    .then(response => response.json())
    .then(data => setDataSale(data));

    fetch('http://localhost:3000/beach')
    .then(response => response.json())
    .then(data => setDataBeach(data));

    fetch('http://localhost:3000/topOffer')
    .then(response => response.json())
    .then(data => setDataOffer(data));

    fetch('http://localhost:3000/about')
    .then(response => response.json())
    .then(data => setDataAbout(data));

    fetch('http://localhost:3000/footer')
    .then(response => response.json())
    .then(data => setDataFooter(data));
  },[])

  return (
    <div className='app'>
      <Header logo = {dataHeader}/>
      <Slider slides = {dataSlider} />
      <div className="wrapper">
        <Sale sales = {dataSale} header = {dataSale[0]?.header}/>
        
      </div>
      <Beach  data = {dataBeach} 
                header = {dataBeach[0]?.header} 
                descr = {dataBeach[0]?.description} 
                image = {dataBeach[0]?.photo}/>
      <div className="wrapper">
        <TopOffer data = {dataOffer} header = {dataOffer[0]?.header} />
      </div>
      <About data = {dataAbout}/>
      <Footer data = {dataFooter}/>
    </div>

  )
}
