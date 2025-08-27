import { useState } from 'react'
import Header from './assets/Components/header/Header'
import Blogs from './assets/Components/blogs/Blogs'
import Bookmark from './assets/Components/Bookmarks/Bookmark'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [adddata,setdata]=useState([]);
  // const [nextpages,setnextpage]=useState(-1);
  // const [classes,setclass]=useState(true);
  
  const handelerbookmark=(blog)=>
  {
    let newdata=[...adddata,blog]
    // console.log(blog);
   !adddata.includes(blog)?setdata(newdata):setdata(adddata);

  }

//   const nextpage=(blog)=>{

//     setnextpage(blog.id);
//     setclass(false)
// console.log(nextpages,"next");
//   }
  return (
    <>
   <div className='w-11/12 mx-auto'>



     <Header></Header>
   {

<div className=' flex  flex-col items-center md:flex-row  md:items-start gap-5 mt-5'>
      
      <Blogs handelerbookmark={handelerbookmark}></Blogs> 
    <Bookmark adddata={adddata}></Bookmark>
    
    </div> 


   } 

   </div>
    </>
  )
}

export default App
