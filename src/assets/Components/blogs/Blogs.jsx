import { useEffect, useState } from "react";
import Blog from "./blog/Blog";
const Blogs = () => {
const [blogs,setblogs]=useState([]);
useEffect(()=>{
fetch('blogs.json')
.then(res=>res.json())
.then(data=>setblogs(data))




},[])


// console.log(blogs);

    return (
        <div className="w-2/3">
            <h1>blog section {blogs.length}</h1>
            <div>

{blogs.map((blog)=>{
  

return <Blog  key={blog.id} blog={blog}></Blog>

})}
            </div>
        </div>
    );
};

export default Blogs;