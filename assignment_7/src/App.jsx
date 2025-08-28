import { useState } from 'react'
import Header from './assets/components/header/Header'
import Section from './assets/components/section2/Section'
import Recipe_data from './assets/components/Recipies/Recipe_data'
import Recipies from './assets/components/Recipies/Recipies'
import Cooking from './assets/components/cooking/Cooking'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [recipes,setrecipe]=useState([]);
  const [cookdone,setcooking]=useState([]);
      const [time,settime]=useState(0);
      const[calories,setcalories]=useState(0)

const handelcooking=(recipe)=>
{
const newrecipe=[...recipes,recipe]
setrecipe(newrecipe)


  // console.log("hello",recipe)
}

 const handelperparing=(recipesfromcook)=>
    {

      let cookingdone=[...cookdone,recipesfromcook];
      setcooking(cookingdone)
       settime(parseInt(recipesfromcook.preparing_time)+time);
     setcalories(parseInt(recipesfromcook.calories)+calories);
let index=recipes.indexOf(recipesfromcook);

// console.log("hi",recipes,index);
setrecipe(recipes.filter((recipe,idx)=>index!=idx))


    }

console.log(cookdone);
  return (
    <>

   <Header></Header>
   <Section></Section>
<Recipe_data></Recipe_data>
   <div className='w-11/12 mx-auto md:flex  py-5 '>
<Recipies handelcooking={handelcooking}></Recipies>
<Cooking  recipes={recipes} handelperparing={handelperparing} cookdone={cookdone} time={time} calories={calories}></Cooking>
   </div>
   
    </>
  )
}

export default App
