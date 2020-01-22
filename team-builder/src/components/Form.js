import React, { useState, useEffect } from "react";

export default function Form(props){

    const [newMember, setNewMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const changeHandle = e => {
        setNewMember({ ...newMember, [e.target.name]: e.target.value})
    };

    const submitHandle = e =>{
        e.preventDefault();
        if(props.editMember){
            props.memberEdit(newMember)     
        }else{
           
            const makeMember = {
                ...newMember,
                id: Date.now()
            };
            props.addMember(makeMember); 
        }
        
        setNewMember({name: "", email: "", role: ""});
    };

    useEffect(()=>{
        if(props.editMember){
            setNewMember(props.editMember);
        }
        
    },[props.editMember]);

    console.log(newMember)
    

    return(
        <form onSubmit={submitHandle}>
            {/* <p>{newMember.name}: {newMember.email} : {newMember.role}</p> */}
            <div>
                <label  htmlFor="name">Name:</label>
                <input onChange={changeHandle} id="name" type="text" name="name" value={newMember.name}/>
            </div>
            <div>
                <label  htmlFor="email">Email:</label>
                <input onChange={changeHandle} id="email" type="email" name="email" value={newMember.email}/>
            </div>
            <div>
                <label htmlFor="role">Role:</label>
                <select onChange={changeHandle} id="role" name="role" value={newMember.role}>
                    <option value="No Selection">Select an Option</option>
                    <option value="Frontend Engineer">Frontend Engineer</option>
                    <option value="Backend Engineer">Backend Engineer</option>
                    <option value="Team Lead">Team Lead</option>
                    <option value="Designer">Designer</option>
                </select>
            </div>
            <button type="submit">Submit</button>    
        </form>
    );
}