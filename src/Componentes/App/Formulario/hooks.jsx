import { useState } from "react";

const FormularioPerson = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setErrorFirstName] = useState("");
    const [error2, setErrorLastName] = useState("");
    const [error3, setErrorEmail] = useState("");
    const [error4, setErrorPassword] = useState("");
    const [error5, setErrorConfirm] = useState("");

    const enviarFormulario = (e) => {
        e.preventDefault();
        const newPerson = {
            firstName, lastName, email, password, confirm 
            }    
            props.actualizarHooks(newPerson);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirm("");
            setErrorFirstName("")
        }
    

    const message = (e)  =>{
        setFirstName (e.target.value);
        if(e.target.value.length < 2){
            setErrorFirstName("First Name must be at least 2 characters");
        } else{
            setErrorFirstName("");
        }
    }

    const message2 = (e)  =>{
        setLastName (e.target.value);
        if(e.target.value.length < 2){
            setErrorLastName("Last Name must be at least 2 characters");
        } else{
            setErrorLastName("");
        }
    }    

    const message3 = (e)  =>{
        setEmail (e.target.value);
        if(e.target.value.length < 2){
            setErrorEmail("Email must be at least 2 characters");
        } else{
            setErrorEmail("");
        }
    }  
    
    const message4 = (e)  =>{
        setPassword (e.target.value);
        if(e.target.value.length < 8){
            setErrorPassword("Password must be at least 8 characters");
        } else{
            setErrorPassword("");
        }
        
    }

    const message5 = (e)  =>{
        setConfirm (e.target.value);
        if (confirm && e.target.value !== password) {
            setErrorConfirm("Las contraseñas no coinciden");
        } else {
            setErrorConfirm("");
        }
    }

    return(
        <>
            <form onSubmit={enviarFormulario}>
                <div className="form">
                    <label htmlFor="firstName">
                        First Name:
                    </label>
                    <input type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={message}
                    />
                </div>
                <p className="error">{error}</p>

                <div className="form">
                    <label htmlFor="lastName">
                        Last Name:
                    </label>
                    <input type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={message2}
                    />
                </div>
                <p className="error">{error2}</p>
                <div className="form">
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={message3}/>
                </div>
                <p className="error">{error3}</p>
                <div className="form">
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={message4}/>
                </div>
                <p className="error">{error4}</p>
                <div className="form">
                    <label htmlFor="confirm">
                        Confirm Password:
                    </label>
                    <input type="password"
                            id="confirm"
                            name="confirm"
                            value={confirm}
                            onChange={message5}/>
                </div>
                <p className="error">{error5}</p>
                <button>Add</button>
            </form>
        </>
    )
}
    

export default FormularioPerson;