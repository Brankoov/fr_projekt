import { useState } from "react"
import { User } from "../types/User"


export default function About(){
    
    const [user, setUser] = useState<User> ({username:"Kalle", age: 25})
    
    function changeUser(){
        setUser({username: "Olle", age:30})
    }
    
    return (
        <>
         <h1>Välkommen till about sidan!</h1>
            <h2>Användare: {user.username}</h2>
            <p>Ålder: {user.age}</p>

             <div>
                <p>Byt namn och ålder på användaren!</p>
                <button onClick={changeUser}>Byt namn och ålder</button>
             </div>

        </>
    )
    
}