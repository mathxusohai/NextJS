import { useState } from "react"

const Estatico = props  => { 
    const [valor, setValor] = useState(0)
    return(  
         <div>
             <h1>Conteúdo Estático</h1>
             <h2>Último Valor = {valor} </h2>
         </div>
    )
}
export default Estatico