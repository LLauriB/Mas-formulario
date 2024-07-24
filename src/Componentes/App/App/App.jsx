
import FormularioPerson from '../Formulario/hooks';
import './App.css';
import { useState } from 'react';
import Person from '../person/person';

const App =() => {
  const person= [{
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirm:""
  }];

  const[listaPerson,setListaPerson] = useState(person);
  const actualizarHooks = (newPerson) => {
    setListaPerson([newPerson, ...listaPerson]);
  }


  return (
    <div className="App">
      <FormularioPerson actualizarHooks={actualizarHooks}a/>
      <h3>Your From data</h3>
      {
      listaPerson.map((person) => {
        return (<Person firstName={person.firstName}
          lastName= {person.lastName}
          email={person.email}
          password={person. password}
          confirm={person.confirm} />)
      })
      }
      
    </div>
  );
}

export default App;
