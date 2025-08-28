import React, { useState } from 'react';

const Cookdone = ({cookdone,c}) => {

    const {recipe_name,preparing_time,calories}=cookdone;
 
    return (  <tbody>
              <tr>
<td>{c}</td>
            <td> {recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <td> <div  className="btn btn-success py-5 md:py-5 mt-5 md:px-5 font-semibold rounded-4xl md:text-lg text-[#150B2B] flex justify-center">done</div>
       
        </td>

        </tr>

        <tr>
<td></td>
<td></td>


        </tr>
        </tbody>
    );
};

export default Cookdone;