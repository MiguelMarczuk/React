import { useState } from "react"

export default function App(){
 const [frutas, setFrutas] = useState("")
 const [listaFrutas, setlistaFrutas] = useState([])
 

 function listadeFrutas(){
      setlistaFrutas([... listaFrutas, {nome:frutas, comprado: false}])
 }

 function box(index){
  const novoArray = listaFrutas.map((fruta, i) => {
   if (i === index) {
        return { ...fruta, comprado: !fruta.comprado }
      }
      return fruta
    })
   setlistaFrutas(novoArray)
   console.log(novoArray)
 }


  return(
    <>
     <div>
       <div>
        <label htmlFor="">sua frunta</label>
        <input type="text"
        value={frutas}
        onChange={(ev)=> setFrutas(ev.target.value)} />
        <button onClick={listadeFrutas}>adicionar</button>
       </div>
       <div>
        {listaFrutas.map((fruta, i)=>(
          <p key={i}>
            {fruta.nome}
            <input type="checkbox" 
            checked={fruta.comprado}
            onChange={() =>box(i)} />
          </p>
        )
        )}
       </div>
     </div>
    
         
    </>
  )
}