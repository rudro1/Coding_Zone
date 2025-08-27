import React from 'react';

const Blog = ({blog}) => {


    console.log(blog);
    const {title,cover_image,author,author_img,reading_time,uploaded_date,hashtags}=blog;
    return (
        <div>
            <img src={cover_image} alt={`that image for ${title}`} />
           <div className='flex justify-between  items-center'>
<div className='flex gap-x-5'>
    <img src={author_img} alt=""  className=' h-14 rounded-full'/>
    <div>
      <div className='text-2x text-[#111111]'>{author}</div>
      <div className='text-[#11111199]'>{uploaded_date}</div>
    </div>
</div>
<div>
<div className='text-[#11111199] text-md'>{reading_time} min read</div>
</div>

           </div>

<div className='text-5xl text-[#111111] font-bold'>{title}</div>

<p className='space-x-3'>
{
    hashtags.map((hashtags,idx)=><span className='text-lg text-[#11111199] '>{hashtags}</span>)
}

</p>
        </div>
    );
};

export default Blog;