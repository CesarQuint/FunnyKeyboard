import {useState} from 'react'
import {jsNota,obtenerFrecuencia,obtenerFrecTecla} from '../helpers/main'
import Key from './Key'
import Semikey from './Semikey'

const tones=['C3','D3','E3','F3','G3','A3','B3','C','D','E','F','G','A','B','C5','D5','E5','F5','G5','A5','B5']
const semiTones=['3C#','3D#','3F#','3G#','3A#','C#','D#','F#','G#','A#','5C#','5D#','5F#','5G#','5A#']
const keyClick=['q','w','e','r','t','y','u','i','o','p','<','z','x','c','v','b','n','m',',','.','-']
const keyClickSem=['1','2','4','5','6','8','9','a','s','d','g','h','k','l','ñ']

function Main({}) {

  const handleKeyDown = event => {  
    //Sonido
    const frecuencia=obtenerFrecTecla(event.key)
    jsNota(frecuencia)
    //Seteado de active
    if(keyClick.includes(event.key)){
      const pp= keyClick.indexOf(event.key)
      const ac=tones[pp]
      const teclaPres=document.querySelector('.'+ac)
      teclaPres.classList.add('active')
      if(teclaPres.classList.contains('active')){
        setTimeout(() => {
          teclaPres.classList.remove('active')
        }, 80);
      }
    }else{
      const pp= keyClickSem.indexOf(event.key)
      const ac=semiTones[pp]
      const teclaPres=document.getElementById(ac)
      teclaPres.classList.add('activeSem')
      if(teclaPres.classList.contains('activeSem')){
        setTimeout(() => {
          teclaPres.classList.remove('activeSem')
        }, 80);
      }
      
    }
    
  };

  return (
    <main tabIndex={0} 
    onKeyDown={e=>handleKeyDown(e)}>
      <h1 id="First">Touck the key</h1>
      <h2 id='KeyBoard'>Use your keys as : q w e r ...</h2>
      <div id='prototipo'>
          <section id='carcasa'>
          </section>
          <section id='bocinas'>
          </section>
          <section id='tablero'>
            <p id='casio'>CASIO</p>
            <button id='power'>O</button>
            <div id='volume'>
              <button>+</button>
              <button>-</button>
            </div>
            <section id="pantalla">
              <div id='reproduccion'>
                <button id='rep'></button>
                <button id='rep'></button>
                <button id='rep'></button>
              </div>
            </section>
            <section id='botones'>
              <button class='b_2'></button>
              <button class='b_2'></button>
              <button class='b_2'></button>
              <button class='b_2'></button>

            </section>
          </section>
          <div id='teclado'>
            <div className='container'>
              {tones.map(tone=>
                <Key
                key={tone}
                tone={tone}
                />
              )}
                <aside id='teclasNeg'>
                  {semiTones.map(semitone=>
                    <Semikey
                    key={semitone}
                    semitone={semitone}
                    />
                    )}
          </aside>
        
            </div>
          </div>
       </div>
     
    </main>
  )
}

export default Main