import React from 'react'
import { Link } from 'react-router-dom'


const Needs = () => {
  return (
    <> 
        <div className="container"> 
          <h2 className="we-need_heading">
            We need...
          </h2>
          

          <div className="we-need_wrap">
            <span className="back-sqr"></span>
              <article className="need-item">
                <span className="white-sqr util-left"></span>
                <img src="./img/needImg.png" alt="need one" className="need-img" />
                <span className="flt-sqr sqr-db"></span>
                <div className="para-btn-wrap">
                  <p className="need-para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora officia illum perspiciatis.
                  </p>
                  <Link to='/donate' className='btn dnte-link'> Donate </Link>

                </div>
              
              </article>
              <article className="need-item">
                <span className="white-sqr left-center_util"></span>
                <img src="./img/needImg.png" alt="need one" className="need-img" />
                <span className="flt-sqr sqr-og"></span>
                <div className="para-btn-wrap">
                  <p className="need-para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora officia illum perspiciatis.
                  </p>
                  <Link to='/donate' className='btn dnte-link'> Donate </Link>

                </div>
              
              </article>
              <article className="need-item">
                <span className="white-sqr util-right"></span>
                <img src="./img/needImg.png" alt="need one" className="need-img" />
              <span className="flt-sqr sqr-gn"></span>
                
                  <div className="para-btn-wrap">
                    <p className="need-para">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora officia illum perspiciatis.
                    </p>
                    <Link to='/donate' className='btn dnte-link'> Donate </Link>

                  </div>
                
              
              </article>

          </div>
        </div>
    </>
  )
}

export default Needs