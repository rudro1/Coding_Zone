import React from 'react';
import banner from '../../../images/banner.svg'
const Section = () => {
    return (
        <div className="text-[#fff] flex flex-col items-center justify-center bg-no-repeat bg-center md:bg-cover space-y-5 md:space-y-10 h-fit px-20 py-10 md:py-30  rounded-2xl"    style={{ backgroundImage: `url(${banner})` }}>
<div className='space-y-2 md:space-y-5'>

                <div className="text-3xl md:text-6xl  font-bold text-left md:text-center space-y-2 md:space-y-5">
                <p className=''>Discover an exceptional cooking </p>
            <div className=''>class tailored for you!</div>
            </div>
        <div className="text-md md:text-xl font-regular text-right md:text-center">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />problems to become an exceptionally well world-class Programmer.</div>
</div>
        <div className='flex gap-x-5 justify-center'>
            <div className="btn btn-success py-5 md:py-7 md:px-7 font-semibold rounded-4xl md:text-xl text-[#150B2B]">Explore Now</div>
            <div className="btn btn-accent py-5 md:py-7 md:px-7  text-[#fff] rounded-4xl font-semibold bg-transparent md:text-xl ">Our Feedback</div>
        </div>
        
        </div>
    );
};

export default Section;