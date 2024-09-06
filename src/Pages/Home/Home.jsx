import { useState } from "react"
import Button from "../../components/Button"
import './Home.css'


function Home(){
    
    var count=0   
    // var name="Harina"

    // console.log (useState())
    // const firstItem=useState()[1]
    // const secondItem=useState()[1]

    // const [number,setNumber]=useState(10)//[] destructure

    const state=useState(0)
    const number=state[0]
    const setNumber=state[1]

    // console.log(number)

    // const [name,setName]=useState(true)

    // const [count,setCount]= useState(0)

    const increase=()=>{
        setNumber(number+1)

        // count=count+1;
        // console.log(count);
    }

    const decrease=()=>{
        setNumber(number-1)

    //  count=count-1;
    //  console.log(count);
}

        return(
            <>
                <h1>{number}</h1>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            
            {/* <h1>Hello Me!!</h1>
            <Button text="Register" />
            <Button text="Login"/>
            <Button text="Logout" /> */}
            </>
)
}

export default Home


