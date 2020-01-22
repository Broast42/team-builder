import React from "react";
import styled from "styled-components";

const MemberCard = styled.div`
    margin: 10px;
`;

export default function Members(props){
    return(
        <MemberCard>
            <h3>Name: {props.name}</h3>
            <p>Email: {props.email}</p>
            <p>Role: {props.role}</p>
            <button onClick={() => props.edit(props.id, props.name, props.email, props.role)}>Edit</button>
        </MemberCard>
    );
}