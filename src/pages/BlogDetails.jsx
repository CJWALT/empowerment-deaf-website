import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';

const BlogDetails = () => {
    const {id} = useParams(); 

 
  const {data:blogs, pending, error} = useFetch('http://localhost:4000/blogs/' + id)
  
  console.log(blogs);
  console.log(blogs.img)

  

  return (
    <>
      {pending && <div> <p>Loading</p></div>}
      

    <div className="container">
        

        <div className="details-wrap">
          <h3 className="details-heading">
            {blogs.title}
          </h3>

          <p className="details-para"> 
          { blogs.post}
          </p>
    
      <div className="details-img">
      {
        blogs && blogs.img.map(image =>{ 

        return <img src= {`/img/${image}`}/>
        })
        }
      </div>
        
        </div>
      

    </div>

      
      
        
    
    </>
  )
}

export default BlogDetails