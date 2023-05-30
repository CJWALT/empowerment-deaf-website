import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <>
        <section className="hero">
          <div className="container">
            <div className="hero_wrap"> 
              <div className="hero_banner" data-aos="fade-zoom-in">
                <h2 className="banner__heading">
                  A little act of kindness can make a lot of difference!
                </h2>
                <p className="banner__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At aspernatur veniam voluptatum iusto reiciendis deserunt corrupti suscipit.
                </p>
                <Button children="Donate Now!" buttonColor="orange" buttonLay='reduce_padding'/>
              </div>
              <div className="hero_img" data-aos="fade-left">
                <img src="./img/needImg.png" alt="hero" className='hero-display'/>
                <span className="flt-rect"></span>
                <span className="hero-back-sqr"></span>
              </div>
            </div>
          </div>
        </section>
    </> 
  )
}

export default Hero