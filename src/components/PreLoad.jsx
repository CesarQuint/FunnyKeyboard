import React from 'react'
import { BiPlayCircle as Play } from "react-icons/bi";

function PreLoad({setPre}) {

    const preLoad=()=>{
        setPre(false)
    }

  return (
    <>
        <div className='modal'>
        </div>
        <div id='modal-content'>  
                <p>Let's Play</p>
                <p id='playButton'
                onClick={()=>preLoad()}
                ><Play/></p>
        </div>
    </>
  )
}

export default PreLoad