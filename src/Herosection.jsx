import React, {useState} from 'react';
// import Plate from './assets/plate.jpg'
import Axios from 'axios'
import './App.css'





  function Herosection(){
    const [value, setValue]=useState("");
    const [recipe, setRecipe]=useState([]);


const apiKey = '90c178e7720e9a53b3fd9b68b78030a7'
const appId = 'b258e8be'
const url = `https://api.edamam.com/search?q=${value}&app_id=${appId}&app_key=${apiKey}`


const getData = async () =>{
  const result = await Axios.get(url);
  console.log(result)
  setValue("")
  };


 const onSubmit =(e)=>{
  e.preventDefault();
  getData();
 }

 const onChange=(e)=>{
  setValue(e.target.value)
 }

 const showRecipe =(e) =>{

 }




    return (
        <div className='HeroSection'>
          <header className='top-area'>
                  <h1>Recipe Finder</h1>
          </header>

            <form onSubmit={onSubmit}>
              <input type='text' autoComplete='off' onChange={onChange} value={value} placeholder='Search food'></input>
            <button onClick={getData}>Search</button>  
            </form>
            
        </div>
        
      )

}
export default Herosection;