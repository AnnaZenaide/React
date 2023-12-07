import {useState} from 'react'

function Carro (){
    
    const [count, setCount] = useState(0)
    return(
        <>

        <button onClick={() => setCount(count+1)}>Acelerar</button>
        <button onClick={() => setCount(count-1)}>Desacelerar</button>
        <div>Resultado:{count}</div>
        </>
    )
}

export default Carro