import React from 'react';
import profile from '../../../images/searchicon.svg'
const Header = () => {
    return (
        <div className=' bg-white fixed w-full mr-0 smooth'>
            <div className="  shadow-sm  grid justify-items-stretch md:justify-items-normal items-center grid-cols-1 lg:grid-cols-3  px-5 py-5 gap-y-5 ">
  <div className="flex flex-row justify-between md:justify-normal flex-col-reverse">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li> <div>
  
<label className="input  w-full  rounded-xl mr-2">
            <img width="15" height="15" src="https://img.icons8.com/fluency-systems-regular/48/search--v1.png" alt="search--v1 " />
        <input type="text" placeholder="Search" className="text-[#150B2BB3]  w-full  text-lg   " />

    </label>


   <button className='w-8 h-8 rounded-full bg-[#0BE58A] text-black  flex items-center justify-center'><img src={profile} alt=""  /> </button>
  </div></li>
       
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl t">EatRight</a>
  </div>
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1  text-[#150B2BB3] text-xl">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="hidden  lg:flex flex-col justify-center md:flex-row gap-2 h-full   items-center  ">
  
<label className="input  w-full md:w-2/3 bg-[#150B2B0D] h-[80%] rounded-4xl">
            <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/search--v1.png" alt="search--v1 " />
        <input type="text" placeholder="Search" className="  w-full  text-xl text-[#150B2BB3]  " />

    </label>


   <button className='w-12 h-12 rounded-full bg-[#0BE58A] text-black  flex items-center justify-center'><img src={profile} alt=""/> </button>
  </div>
</div>
        </div>
    );
};

export default Header;