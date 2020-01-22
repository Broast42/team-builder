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
  console.log("App Component:", member);

  const addMember = newMember => {
    setMember([...member, newMember]);
  };

  return (
    <Container>
      <FormDiv>
        <h3>Add A New Member</h3>
        <Form addMember={addMember}/>
      </FormDiv> 
      <div>
        <h1>Team Members</h1>
        <MemberDiv>
          {member.map((x,index)=>(
            <Members name={x.name} email={x.email} role={x.role} key={index} />
          ))} 
        </MemberDiv>
         
      </div>
      
    </Container>
  );
}

export default App;
