import { useState } from "react"
import { User } from "../types/User"

export default function Home(){
    
    const [score, setScore] = useState<number>(0)
    
    function getNextScore(currentScore: number): number {
        return currentScore + 1;
    }

    function addToScore(){
        setScore(getNextScore(score))
        
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