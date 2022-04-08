import './App.css';
import Data from './components/data';
import axios from 'axios';
import { useState,useEffect } from 'react';




function App() {

const [state,setState]=useState([])

  const [count, setCount]=useState(0)


  function decreaseCount(){
    setCount(count-100)
  }


function increaseCount(){
  setCount(count+100)
}

// function setData(datas){
//   setState(datas)
// }



useEffect(()=>{
    
  (async ()=>{
try{
    const response=await axios.get(`http://jservice.io/api/random`)
    setState(response.data)
}catch(err){
    console.log(err)
}
  })()
},[])



          
//  )

// }









  
  return (
    <div className="App">
 

      <div>Points:</div>
           <h2>
             <button onClick={decreaseCount}>decrease</button>
                  {count}
             <button onClick={increaseCount}>increase</button>
           </h2>
        <div>Category:</div>
        <div>
        
          <button  >
          Get Question
        </button>
        </div>

        {
       state.map(element=>(
         <div>
           <h1>The Category is {element.category.title}</h1>
           <h2>The question is:{element.question} </h2>   
           <h3>The answer{element.answer}</h3>
           <h4>Points:{element.value}</h4>
           </div>
       ))
   }

 
<Data />

      
    </div>
  );
 

}



export default App;
