import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <>
        <section className="hero">
          <div className="container">
            <div className="hero_wrap"> 
              <div className="hero_banner">
                <h2 className="banner__heading">
                  A little act of kindness can make a lot of difference!
                </h2>
                <p className="banner__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At aspernatur veniam voluptatum iusto reiciendis deserunt corrupti suscipit.
                </p>
                <Button children="Donate Now!" buttonColor="orange" buttonLay='reduce_padding'/>
              </div>
              <div className="hero_img">
                <img src="./img/hero_img.png" alt="hero image"/>
              </div>
            </div>
          </div>
        </section>
    </> 
  )
}

export default Hero