import React from 'react';

const CooksingleOne = ({recipes,c,handelperparing}) => {
   
const {recipe_name,preparing_time,calories}=recipes;

    return (
       
        <tr>
<td>{c}</td>
            <td> {recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <td> <div onClick={()=>{handelperparing(recipes)}} className="btn btn-success py-5 md:py-5 mt-5 md:px-5 font-semibold rounded-4xl md:text-lg text-[#150B2B] flex justify-center">Preparing</div>
       
        </td>
        </tr>
            
     
    );
};

export default CooksingleOne;