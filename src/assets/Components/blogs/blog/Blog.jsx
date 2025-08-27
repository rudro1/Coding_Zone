import React from 'react';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog,handelerbookmark,handelbookmarkstime,itherornor,blogid}) => {


    console.log(blog);
    const {id,title,cover_image,author,author_img,reading_time,uploaded_date,hashtags}=blog;
    return (
        <div  className='space-y-4 border-b-2 border-b-blue-800 border-dashed pb-5 pt-5  pb-5'>
            <img src={cover_image} alt={`that image for ${title}`} className='w-full rounded-xl' />
           <div className='flex justify-between  items-center'>
<div className='flex gap-x-5'>
    <img src={author_img} alt=""  className=' h-14 rounded-full'/>
    <div>
      <div className='text-2x text-[#111111]'>{author}</div>
      <div className='text-[#11111199]'>{uploaded_date}</div>
    </div>
</div>
<div>
<div className='text-[#11111199] text-md flex items-center gap-x-2'>{reading_time} min read 
  { ( blogid !=id || !itherornor)?  <button onClick={()=>{

    handelerbookmark(blog)
}} className=''><FaBookmark></FaBookmark></button> :



 <button onClick={()=>{

    handelerbookmark(blog)
}} className="text-red-800"><FaBookmark></FaBookmark></button> 




} </div>
</div>

           </div>

<div className='text-2xl md:text-5xl text-[#111111] font-bold'>{title}</div>

<p className='space-x-3'>
{
    hashtags.map((hashtags,idx)=><span key={idx} className='text-lg text-[#11111199] '>{hashtags}</span>)
}

</p>

<button onClick={()=>{

    handelbookmarkstime(blog);
}} className='text-[#6047EC] underline text-xl'>Mark as read</button>
        </div>
    );
};

export default Blog;