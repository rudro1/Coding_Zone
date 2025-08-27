import React from 'react';
import profile from '../../images/profile.png'
const Header = () => {
    return (
        <div className='flex flex-col items-center md:flex-row justify-between gap-y-5 md:gap-x-2 mt-5 border-b-4 border-purple-950 border-dotted pb-2'>
             <div className="text-3xl text-amber-300">Coding zone</div>
     <img src={profile} alt="" />
        </div>
    );
};

export default Header;