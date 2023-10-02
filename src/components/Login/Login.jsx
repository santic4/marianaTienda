import React, { useState } from "react";
import './Login.css'

//imports Firebase
import appFirebase from '../../firebase/firebase'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

const auth = getAuth(appFirebase);

const Login = () => {

    const [registro, setRegistro ] = useState(false);

    const handlerSubmit = async(e)=>{
        e.preventDefault()
        const correo = e.target.email.value;
        const password = e.target.password.value;
    
        if(registro){
            await createUserWithEmailAndPassword(auth, correo, password)
        }else{
            signInWithEmailAndPassword(auth, correo, password);
        }
        setRegistro(false)
    } 
    

    return(
       <div className="contenedorPadre">
        
            <h1>Inicia sesion</h1>
         
            <form className="padreForm" onSubmit={handlerSubmit}>
                <div className="hijo1">
                  <label className="labelForm">Email:</label>
                  <input type="email" className="inputForm" placeholder="Ingresar email" id="email" required></input>
                </div>

                <div className="hijo2">
                  <label className="labelForm">Contraseña:</label>
                  <input type="password" className="inputForm" placeholder="Ingresar contraseña" id="password" required></input>
                </div>

                <button className="btnForm">
                   Inicia sesíon
                </button>
            </form>

       </div>
    )
}

export default Login;