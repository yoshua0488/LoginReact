import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Converter from './Converter' // Ajusta la ruta según la ubicación de Converter.jsx

function App() 
{
  const [Usuario, setUsuario] = useState("")
  const [Clave, setClave] = useState("")
  const [Logueado, setLogueado] = useState(false)

  function CambiarUsuario (evento) 
  { 
    setUsuario (evento.target.value)
  }

  function CambiarClave (evento) 
  { 
    setClave (evento.target.value)
  }

  async function Ingresar () 
  { 
    const Peticion = await fetch ("http://localhost:3000/Login?Usuario="+Usuario+"&Clave"+Clave, {credentials: "include"})
    if 
    (
        Peticion.ok
    )
    {
      setLogueado(true)
    }
    else
    {
      alert ("Usuario o clave incorrectos")
    }
    //if (Usuario == "Admin" && Clave == "Admin")
  //  {
  //    alert ("Bienvenido")
  //    setLogueado (true)
  //  }
  //  else
  //  {
  //    alert ("Usuario o Clave incorrecto")
  //  }
  }

  async function Validar () 
  {
    const Peticion = await fetch ("http://localhost:3000/Validar", {credentials: "include"})
    if 
    (
        Peticion.ok
    )
    {
      setLogueado(true)
    }
  }

  useEffect(() => {
    Validar()
  }, [])

  if (Logueado) 
  {
    return <Converter />
  }
  return (
    <>
    <h1>Inicio de sesión</h1>
      <input placeholder = "Usuario" type="text" name="Usuario" id="Usuario" value={Usuario} onChange={CambiarUsuario}/>
      <input placeholder = "Clave" type="password" name="Clave" id="Clave" value={Clave} onChange={CambiarClave}/>
      <button onClick={Ingresar}>Ingresar</button>
  </>
  )
}

export default App
