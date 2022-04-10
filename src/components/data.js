import { useState,useEffect } from "react";




export default function Data({data,info,setInfo}){
const handleClick=()=>{
  data.map(element=>{
    setInfo({...info,["content"]:element.answer,["type"]:"Answer", ["symbol"]:"."})

  })

}


const revealQuestion=()=>{
  data.map(element=>{
    setInfo({...info,["content"]:element.question,["type"]:"Question", ["symbol"]:"?"})

  })

}




 return(
     <>
   {
       data.map(element=>(
         <div>
           <h1>the category:{element.category.title}</h1>
           <h2>{info.type}:{info.content} {info.symbol} </h2>   
          
           <h4>Points:{element.value}</h4>
           {
             info.type==="Question"?   <button className="revealanswer" onClick={handleClick}>Reveal answer</button>:
             <button className="revealquestion" onClick={revealQuestion}>Reveal Question</button>
           }
         
           
          
           </div>
       ))
   }
          </>
 )
  }


//  <div>
//  <h1>the category:{data.category.title}</h1>
//  <h2>{info.type}:{info.content} </h2>   

//  <h4>Points:{data.value}</h4>
//  <button >Reveal answer</button>
//  </div>
// }








// <h3>the answer:{element.answer}</h3>
