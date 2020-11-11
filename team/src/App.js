import React, { useState } from 'react';
import Form from './Form';
import Member from './Member';
import Data from './dummydata';
import './App.css';

const initalValues = {
  username: "",
  email: "",
  role: ""
};

function App() {
  const [members, setMembers] = useState(Data);
  const [formValues, setFormValues] = useState(initalValues);

  const updateMembers = (inputName, inputValue) => {
    setFormValues({...formValues,
      [inputName]: inputValue});

  }

  const submitMember = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    // if (!event.name.value || !newMember.email.value || !newMember.role.value){
    //   console.log('empty');
    //   return;
    // }

    // this is where we did the axios request

    setMembers(members.concat(newMember));
    setFormValues(initalValues);
  }

  return (
    <div className="App">
      <Form submit={submitMember} update={updateMembers} values={formValues} />
      { members.map(member => {
        return <Member key={member.id} member={member} />
      }) }
    </div>
  );
}

export default App;