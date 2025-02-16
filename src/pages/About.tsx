import { useState } from "react"
import { User } from "../types/User"


export default function About(){
    
    const [user, setUser] = useState<User> ({username:"Kalle", age: 25})
    
    function updateUser(name: string, age: number) {
        setUser({ username: name, age: age });
    }
    
    return (
        <>
         <h1>Välkommen till about sidan!</h1>
            <h2>Användare: {user.username}</h2>
            <p>Ålder: {user.age}</p>

             <div>
                <button onClick={() => updateUser("Lisa", 28)}>Byt till Lisa</button>
                <button onClick={() => updateUser("Erik", 35)}>Byt till Erik</button>
             </div>

        </>
    )
    
}