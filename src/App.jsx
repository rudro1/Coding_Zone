import { useState } from 'react'
import Header from './assets/Components/header/Header'
import Blogs from './assets/Components/blogs/Blogs'
import Bookmark from './assets/Components/Bookmarks/Bookmark'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [adddata,setdata]=useState([]);
  const [times,settime]=useState(0);
  // const [itherornor ,setcolor]=useState(false);
  const [blogid,setid]=useState([]);
  // const [nextpages,setnextpage]=useState(-1);
  // const [classes,setclass]=useState(true);
  
  const handelerbookmark=(blog)=>
  {
    let newdata=[...adddata,blog]
    // console.log(blog);
//    !adddata.includes(blog)?setdata(newdata):setdata(adddata);
// let getbookmarkdid=[...blogid ,blog.id];
// adddata.includes(blog)?setid(getbookmarkdid):setid(blogid);

// if(adddata.includes(blog))
// {
// // let getbookmarkdid=[...blogid ,blog.id];
// // setid(getbookmarkdid)

//  console.log(blogid);

// }
if(!adddata.includes(blog))
{
  setdata(newdata)
  let getbookmarkdid=[...blogid ,blog.id];
setid(getbookmarkdid)
  
}


  }
  

//   const nextpage=(blog)=>{

//     setnextpage(blog.id);
//     setclass(false)
// console.log(nextpages,"next");
//   }


const handelbookmarkstime=time=>{

  if(adddata.includes(time))
  {setdata(adddata.filter(data=>data.id !=time.id))
  // event.target.setAttribute("disabled",false);
 let newtime=time.reading_time+times;

setid(blogid.filter(id=>id !=time.id))

  }

 

  // else

  //   {

  //      event.target.setAttribute("disabled",false);
  // //       let newtime=time.reading_time+times;
  // // settime(newtime);
 
  //   }
}
// console.log(times);

  return (
    <>
   <div className='w-11/12 mx-auto'>



     <Header></Header>
   {

<div className=' flex  flex-col items-center md:flex-row  md:items-start gap-5 mt-5'>
      
      <Blogs handelerbookmark={handelerbookmark} handelbookmarkstime={handelbookmarkstime}  blogid={blogid}></Blogs> 
    <Bookmark adddata={adddata} times={times}></Bookmark>
    
    </div> 


   } 

   </div>
    </>
  )
}

export default App
