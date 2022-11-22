import {jsNota,obtenerFrecuencia} from '../helpers/main'
import React from 'react'

function Semikey({semitone}) {
  const makeSound=semitone=>{
    const frecuencia=obtenerFrecuencia(semitone)
    jsNota(frecuencia)
    }
  return (
    <div
    onClick={()=>makeSound(semitone)}
    id={semitone}
    className={'semiKey'}>{semitone}</div>
  )
}

export default Semikey