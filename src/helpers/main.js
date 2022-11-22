

//Construccion del Ocilador
 const audioCtx = new (window.AudioContext || window.webkitAudioContext)

 function jsNota(frecuencia){
   let os=audioCtx.createOscillator()
   const g=audioCtx.createGain()
   os.connect(g)
   os.type='triangle'
   os.frequency.value=frecuencia
   g.connect(audioCtx.destination)
   os.start(0)
   g.gain.exponentialRampToValueAtTime(0.00001,audioCtx.currentTime +2)
 }
 
 //Seleccion del tono
 const obtenerFrecuencia =tono=>{
    switch (tono) {
      case 'C3':
        return 130.813
        break;
      case 'D3':
        return 146.832
        break;
      case 'E3':
        return 164.814
        break;
      case 'F3':
        return 174.614
        break;
      case 'G3':
        return 195.998
        break;
      case 'A3':
        return 220
        break;
      case 'B3':
        return 246.942
        break;
      case 'C':
        return 261.626
        break;
      case 'D':
        return 293.665
        break;
      case 'E':
        return 329.628
        break;
      case 'F':
        return 349.228
        break;
      case 'G':
        return 391.995
        break;
      case 'A':
        return 440
        break;
      case 'B':
        return 493.833
        break;
      case 'C5':
        return 523.251
        break;
      case 'D5':
        return 587.330
        break;
      case 'E5':
        return 659.255
        break;
      case 'F5':
        return 698.456
        break;
      case 'G5':
        return 783.991
        break;
      case 'A5':
        return 880
        break;
      case 'B5':
        return 987.767
        break;

        //Semitonos
      case '3C#':
        return 138.591
        break;
      case '3D#':
        return 155.563
        break;
      case '3F#':
        return 184.997
        break;
      case '3G#':
        return 207.652
        break;
      case '3A#':
        return 233.082
        break;
      case 'C#':
        return 277.83
        break;
      case 'D#':
        return 311.127
        break;
      case 'F#':
        return 369.994
        break;
      case 'G#':
        return 415.301
        break;
      case 'A#':
        return 466.164
        break;
    
      case '5C#':
        return 554.365
        break;
      case '5D#':
        return 622.254
        break;
      case '5F#':
        return 739.989
        break;
      case '5G#':
        return 830.609
        break;
      case '5A#':
        return 932.328
        break;
    
      default:null
        break;
    }
  }

  const obtenerFrecTecla =(tecla)=>{
    switch (tecla) {
        case 'q':
            return 130.813
            break;
          case 'w':
            return 146.832
            break;
          case 'e':
            return 164.814
            break;
          case 'r':
            return 174.614
            break;
          case 't':
            return 195.998
            break;
          case 'y':
            return 220
            break;
          case 'u':
            return 246.942
            break;
          case 'i':
            return 261.626
            break;
          case 'o':
            return 293.665
            break;
          case 'p':
            return 329.628
            break;
          case '<':
            return 349.228
            break;
          case 'z':
            return 391.995
            break;
          case 'x':
            return 440
            break;
          case 'c':
            return 493.833
            break;
          case 'v':
            return 523.251
            break;
          case 'b':
            return 587.330
            break;
          case 'n':
            return 659.255
            break;
          case 'm':
            return 698.456
            break;
          case ',':
            return 783.991
            break;
          case '.':
            return 880
            break;
          case '-':
            return 987.767
            break;
    
        //Semitonos
        case '1':
            return 138.591
            break;
          case '2':
            return 155.563
            break;
          case '4':
            return 184.997
            break;
          case '5':
            return 207.652
            break;
          case '6':
            return 233.082
            break;
          case '8':
            return 277.83
            break;
          case '9':
            return 311.127
            break;
          case 'a':
            return 369.994
            break;
          case 's':
            return 415.301
            break;
          case 'd':
            return 466.164
            break;
          case 'g':
            return 554.365
            break;
          case 'h':
            return 622.254
            break;
          case 'k':
            return 739.989
            break;
          case 'l':
            return 830.609
            break;
          case 'ñ':
            return 932.328
            break;
        
    
    
      default: return 2
        break;
    }
  }
  export {jsNota,obtenerFrecuencia,obtenerFrecTecla}

  