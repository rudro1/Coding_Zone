import React from 'react';
import CooksingleOne from './CooksingleOne';
import Cookdone from './Cookdone';
import Table from './Table'
 let c=0;
const Cooking = ({recipes,handelperparing,cookdone,time,calories}) => {
   
    return (
        <div>

        <div>
            <h1>Want to cook: {recipes.length}</h1>
            <table>
<Table></Table>
    <tbody>
      {recipes.map((recipes,idx)=>{
        
c=idx+1;

       return <CooksingleOne key={idx} recipes={recipes} c={c} handelperparing={handelperparing}></CooksingleOne>}
      )}
    </tbody>
</table>

        </div>
<div>

    <h1>Currently cooking:{cookdone.length}</h1>
<table>
    <Table></Table>
   
 {cookdone.map((cookdone,idx)=>{
        
c=idx+1;

       return <Cookdone key={idx} cookdone={cookdone} c={c} ></Cookdone>}
      )}
   
    
</table>
<h1>total :{time}</h1>
<h1>total :{calories}</h1>
</div>

</div>
    );
};

export default Cooking;