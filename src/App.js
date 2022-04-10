import './App.css';
import Data from './components/data';
import { useState,useEffect } from 'react';
import axios from "axios";


function App() {
//Declarigin Variables
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  const [info,setInfo]=useState({
    type:"",
    content:"",
    symbol:"",

})


///Functions
  function decreaseCount(){
    setCount(count-100)
  }


function increaseCount(){
  setCount(count+100)
}




async function getQuestion(){
  try{
    const response = await axios.get(`http://jservice.io/api/random`)
    setData(response.data)
    setInfo({...info,["content"]:response.data[0].question,["type"]:"Question", ["symbol"]:"?"})

  }catch(err){
    console.log(err)
}
}

useEffect(()=>{
  getQuestion()
},[])







  

   
      



  return (
    <div className="App">
 

      <div>Points:</div>
           <h2>
             <button className="decrease"onClick={decreaseCount}>decrease</button>
                  {count}
             <button className='increase' onClick={increaseCount}>increase</button>
           </h2>
        <div>Category:</div>
        <div>
        
          <button className='getQuestion' onClick={getQuestion}>
          <h1>Get Question:</h1>
        </button>
        </div>
        <Data data={data} info={info} setInfo={setInfo}/>
    


      
    </div>
  );
 

}



export default App;
