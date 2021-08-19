import React from 'react'
import Bt from '../components/bt'
import { useState } from 'react'


export default () =>{
    const [a, aSet] = useState("oi a todos")
    var [recebCont, aSetCont] = useState(0)
    return(
    <>
    <div>
        <h2 className = "a">{a}</h2>
        <input type="text" onChange={ evet=> aSet(evet.target.value)}/>
        <Bt texto = {a} onChangeCont = {(cont)=> aSetCont((recebCont)=> recebCont = cont)}  
        onClick = {()=> alert(a)} onClickCont = {()=> alert(recebCont)}></Bt>
        <p>{a} {recebCont}</p>
    </div>
    </>
    )
    }