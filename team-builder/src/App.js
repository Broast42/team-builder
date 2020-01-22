import React, { useState } from 'react';
import Members from "./components/Members";
import Form from "./components/Form";
import data from "./data";
import styled from "styled-components";
import './App.css';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height 900px;
`;

const FormDiv = styled.div`
  margin: 10px;
  border-right: 2px dashed black;
  padding 5px;
`;

const MemberDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
   
`;

function App() {
  
  const [member, setMember] = useState(data);
  
  const [memberToEdit, setMemberToEdit] = useState()

  const addMember = newMember => {
    setMember([...member, newMember]);
  };

  const memberEdit = edit => {
    member.map((x) => {
      if(x.id === edit.id){
       setMember([...member, (member.x = edit)])
      }
      
    })
    
  };

  console.log(member[0]);

  const editMember = (id, editName, editEmail, editRole) =>{
    setMemberToEdit({id: id, name: editName, email: editEmail, role: editRole })

  };

  console.log(memberToEdit);

  return (
    <Container>
      <FormDiv>
        <h3>Add A New Member</h3>
        <Form addMember={addMember} editMember={memberToEdit} memberEdit={memberEdit}/>
      </FormDiv> 
      <div>
        <h1>Team Members</h1>
        <MemberDiv>
          {member.map((x,index)=>(
            <Members id={x.id} name={x.name} email={x.email} role={x.role} edit={editMember} key={index} />
          ))} 
        </MemberDiv>
         
      </div>
      
    </Container>
  );
}

export default App;
