import { useState } from "react"
import { User } from "../types/User"

export default function Home(){
    
    const [score, setScore] = useState<number>(0)
    

    function addToScore(){
        setScore(score + 1)
        
      }

    return(
        <>
        <h1>Välkommen till startsidan!</h1>
        

        <div>
            <p>
                <p>Score: {score}</p>
                <button onClick={addToScore}>Score + 1</button>
            </p>
        </div>   
        
        </>
    )


}