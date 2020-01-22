import React, { useState } from "react";

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
        const makeMember = {
            ...newMember,
            id: Date.now()
        };
        props.addMember(makeMember);
        setNewMember({name: "", email: "", role: ""});
    };

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
                <input onChange={changeHandle} id="role" type="text" name="role" value={newMember.role}/>
            </div>
            <button type="submit">Submit</button>    
        </form>
    );
}