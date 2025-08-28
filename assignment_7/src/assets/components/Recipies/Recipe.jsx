import React from 'react';

const Recipe = ({recipe,handelcooking}) => {
    const { recipe_name,recipe_image,short_description,ingredients,preparing_time,calories}=recipe;
   console.log(recipe_image);
    return (
        <div className='py-5 px-5 border-1 border-[#28282833] shadow-2xs rounded-lg space-y-2  md:space-y-3 '>
          
<img src={recipe_image} alt=""  className='h-48 md:h-60 lg:h-48 w-full object-cover   rounded-lg shadow-xl'/>
<div className="text-xl font-semibold">{recipe_name}</div>
<div className="text-md text-[#2828289E] font-normal">{short_description}</div>
<div className='border-b-1 border-t-1 border-dashed border-[#2828289E] py-3'>
    <div className="text-md font-medium pb-2 capitalize">Ingredients:{ingredients.length}</div>
    <ol className='list-disc px-5 text-[#282828BD]'>
{
    ingredients.map((ingredients,idx)=>{
    
if(idx<3)
{
    return  <li key={idx}>{ingredients}</li>
}

    }
    
    )
}


    </ol>
</div>


<div className='flex gap-x-5 capitalize mt-5'>
    <div className="text-md font-normal text-[#2828289E] flex items-center gap-x-2"><img width="25" height="25" src="https://img.icons8.com/dotty/50/present.png" alt="present"/>{preparing_time}</div>
    <div className="text-md font-normal text-[#2828289E] flex items-center gap-x-2"><img width="25" height="25" src="https://img.icons8.com/ultraviolet/50/fire-element.png" alt="fire-element"/>{calories}</div>
</div>

            <div onClick={()=>{

handelcooking(recipe);


            }} className="btn btn-success py-5 md:py-5 mt-5 md:px-5 font-semibold rounded-4xl md:text-lg text-[#150B2B] flex justify-center">Want to Cook</div>
        </div>
    );
};

export default Recipe;