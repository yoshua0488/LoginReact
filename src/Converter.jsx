import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Converter({ Usuario, Clave }) 
{
  const [TextoAVoz, setTextoAVoz] = useState("")
  const [VozATexto, setVozATexto] = useState("")

  function CambiarTexto (evento) 
  { 
    setTextoAVoz (evento.target.value)
  }

  function ConvertirTextoAVoz () 
  { 
    const synth = window.speechSynthesis
    const utterthis = new SpeechSynthesisUtterance (TextoAVoz)
    synth.speak (utterthis)
  }

  function Resultado (event)
  {
    setVozATexto (event.results [0] [0].transcript)
  }

  function GrabarVozATexto () 
  {
    const recognition = new window.webkitSpeechRecognition ()
    recognition.lang = "es-ES"
    recognition.start ()
    recognition.onresult = Resultado
  }

    return (
      <>
      <h1>Converso TTS y STT</h1>
      <br />
      <h3>Conversor de texto a voz</h3>
      <input type="text" id="TextoAVoz" value={TextoAVoz} onChange={CambiarTexto}/>
      <button onClick={ConvertirTextoAVoz}>Convertir</button>
  
      <h3>Conversor de voz a texto</h3>
      <button onClick={GrabarVozATexto}>Grabar</button>

      { Usuario } 
      { Clave }
      { VozATexto }
      </>
    );
  }

export default Converter
