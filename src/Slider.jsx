import { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import {AiOutlineArrowLeft} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"

export  function Slider({slides}) {

  const [showSlide, setShowSlide] = useState(1);

  const moveSlide = (id)=>{
    setShowSlide(id);
  }

  const prevSlide = () =>{
    showSlide === 1 ? setShowSlide(slides.length) : setShowSlide(showSlide - 1);
  }

  const nextSlide = () =>{
    showSlide === slides.length ? setShowSlide(1) : setShowSlide(showSlide + 1);
  }

  useEffect(()=>{

    const interval = setInterval(()=>{
      setShowSlide(prev=> {
        if(prev === 3) return 1;
        return prev+1;
      });
     
    }, 4000);

    return () => {
      clearInterval(interval); 
    }

  }, []);


  return (
    <div className="slider">
      <div className="slider-wrap">
      {
            slides.map(slide=> 
              <div key={slide.id} className={slide.id === showSlide ? 'slide active' : 'slide'}>
                <div className='slide-img' style={{backgroundImage: `url(${slide.photo})`}}></div>
                <div className='slide-title'>
                
                <Animated animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={ slide.id === showSlide } animationOutDuration ={500}>
                    <h2>{slide.title}</h2>
                    <button className="btn">LOCATION</button>
                </Animated> 
              
                {/* <button className="btn">LOCATION</button> */}
                   
                </div>
              </div>
            )
          }
      </div>
      <div className="slider-indicators">
        {
          slides.map(slide => 
          <span
            key={slide.id}
            className = {slide.id === showSlide ? 'active' : ''}
            onClick = {()=>moveSlide(slide.id)}>
          </span>)
        }
      </div>
      <span 
        className="slide-arrow slide-arrow-prev"
        onClick={prevSlide}
      ><AiOutlineArrowLeft /></span>
      <span 
        className="slide-arrow slide-arrow-next"
        onClick={nextSlide}  
      ><AiOutlineArrowRight /></span>
    </div>
  )
}
