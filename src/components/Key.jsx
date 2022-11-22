import {jsNota,obtenerFrecuencia} from '../helpers/main'
function Key({tone}) {
    
const makeSound=tone=>{
  const frecuencia=obtenerFrecuencia(tone)
  jsNota(frecuencia)
  }

  return (
    <>
    <div 
    onClick={()=>makeSound(tone)}
    className={'key '+tone}
    >
        <p>{tone}</p>
    </div>
    </>
  )
}

export default Key