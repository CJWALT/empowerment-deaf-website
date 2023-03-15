import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Blog from "./pages/Blog";
import Footer from './components/Footer'

function App() {
  return (
    <>
        <Router>
          <Header/>

            <Routes> 
                <Route exact path ='/' element={<Home/>}/>
                <Route exact path = '/blog' element={<Blog/>}/>
                <Route exact path ='blogs/:id' element={<BlogDetails/>}/>
            </Routes>
          <Footer/>
        </Router>
    </>
  );
}

export default App;
