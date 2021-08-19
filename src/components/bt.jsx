import React from 'react'
import { useState } from 'react';

export default (props) =>{
    var [cont, setV] = useState(0);
        
    return(
    <>
    <button onClick={()=> {props.onClick()
         props.onChangeCont(cont)
         setV((cont)=>cont+1)}}>{props.texto}</button>

    <button onClick={()=> {props.onClickCont()
        props.onChangeCont(cont)
         setV((cont)=>cont+1)}}>{props.texto}</button>
    
    </>  
  )
  }