import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../useFetch'
import ReactPaginate from 'react-paginate'

import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from 'react-icons/md'


const Blog = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const [items_per_pg, set_items_per_pg] = useState(4);


  const {data:blogs, pending, error} = useFetch('http://localhost:4000/blogs')
  
  const handlePageChange =({selected})=>{ 
    setCurrentPage(selected)
  }
  

  useEffect(()=>{
    const handleResize = ()=>{ 
      if (window.innerWidth <= 768){ 
        set_items_per_pg(1);
      } else if (window.innerWidth <= 1024) { 
        set_items_per_pg(2);
      } 
      else{ 
        set_items_per_pg(4);
      }
    }
      handleResize();
      window.addEventListener('resize', handleResize, false);
      return ()=> window.removeEventListener('resize', handleResize, false);
  },[]);

  const currentBlog = blogs.slice(currentPage * items_per_pg, (currentPage  + 1) * items_per_pg);
  
  return (
  <>

    <section className="blog">
      <div className="container">
        <h2 className="blog-heading">Our Blog</h2>
        <hr className="blog-vert"/>
        <div className="blog-wrap">
          { error && <div> {error} </div>}

          {pending && <div> <p> Loading </p> </div>}
          { currentBlog.map((blog)=>(
          <article className="blog-content" key={blog.id}>
              <Link to='/blogs/:id' className='blog-link'>{blog.title}</Link>
              <small className="date-posted">
                {blog.datePosted}
              </small>
            </article>
          ))}
          </div>

          
        <div className="blog-paginate">

          <ReactPaginate
            pageCount={Math.ceil(blogs.length / items_per_pg)}
            pageClassName={'paginate-num'}
            previousClassName='prev'
            previousLabel={<MdOutlineKeyboardArrowLeft/>}
            nextClassName='next'
            nextLabel={<MdOutlineKeyboardArrowRight/>}
            onPageChange={handlePageChange}
            containerClassName={'paginate-wrap'}
            activeClassName={'pagi-active'}
          />
          </div>
      </div>

    </section>
  

  </>
  )
}


export default Blog