import Header from "./components/Header";
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Blog from "./pages/Blog";
import Footer from './components/Footer'
import {FaArrowUp} from 'react-icons/fa'
import { useState, useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
function App() {

  const [showScrollUp, setShowScrollUp] = useState(true)  

  useEffect(()=>{ 
    Aos.init({
      duration:2000,
    });
  }, [])



  const scrollY = document.documentElement.scrollTop;
  
  function scrollUp (){
    console.log(scrollY)

    if( scrollY > 350){ 
      setShowScrollUp(false)
    }
    else if(scrollY < 350){ 
      setShowScrollUp(true)
    }
  }

  function scrollTop(){ 

    window.scrollTo({
      top:0, 
      behavior:'smooth'
    })
  }

window.addEventListener('scroll', scrollUp)
  
return (
    <>
        <Router>
          <Header/>

            <Routes> 
                <Route exact path ='/' element={<Home/>}/>
                <Route exact path = '/blog' element={<Blog/>}/>
                <Route exact path ='blog/:id' element={<BlogDetails/>}/>
            </Routes>
          <Footer/>
          <FaArrowUp className={showScrollUp ? "scrollUp" : "scrollUp show-scrollUp"} onClick={scrollTop}/>
        </Router>
    
    </>
  );
}

export default App;
