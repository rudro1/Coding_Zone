import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const Recipies = ({handelcooking}) => {

const [recipes,setrecipe]=useState([]);

useEffect( ()=>{
fetch('recipe.json')
.then(res=>res.json())
.then(data=>setrecipe(data))

    }

   
    
,[])

 console.log(recipes);

    return (
        <div className='md:w-2/3'>
     
<div className="recepi_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-5">

    {

        recipes.map((recipe,idx)=> <Recipe key={idx} recipe={recipe} handelcooking={handelcooking} ></Recipe>)
    }
</div>

        </div>
    );
};

export default Recipies;