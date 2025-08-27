import { useState } from 'react'
import Header from './assets/Components/header/Header'
import Blogs from './assets/Components/blogs/Blogs'
import Bookmark from './assets/Components/Bookmarks/Bookmark'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='w-11/12 mx-auto'>



     <Header></Header>
    <div className='md:flex '>
      <Blogs></Blogs>
    <Bookmark></Bookmark>
    </div>
   </div>
    </>
  )
}

export default App
