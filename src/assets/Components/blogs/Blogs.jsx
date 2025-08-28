import { useEffect, useState } from "react";
import Blog from "./blog/Blog";
const Blogs = ({handelerbookmark,handelbookmarkstime,blogid}) => {
const [blogs,setblogs]=useState([]);
useEffect(()=>{
fetch('blogs.json')
.then(res=>res.json())
.then(data=>setblogs(data))




},[])


// console.log(blogs);

    return (
        <div className="md:w-2/3 ">
          
            <div className="">

{blogs.map((blog,idx)=>{
  

return <Blog  key={idx} blog={blog} handelerbookmark={handelerbookmark} handelbookmarkstime={handelbookmarkstime}  blogid={blogid}></Blog>

})}
            </div>
        </div>
    );
};

export default Blogs;