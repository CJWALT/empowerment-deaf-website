import React from 'react'
import { useParams } from 'react-router';

const BlogDetails = () => {
    const {id} = useParams(); 

  return (
    <div> testing{id}</div>
  )
}

export default BlogDetails