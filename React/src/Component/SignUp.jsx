import React, { useState, useEffect } from 'react'
import SignUpForm from './SignUpForm'
import axios from 'axios'
import FirstPage from './FirstPage'
function SignUp() {
    const [signUp, setSignUp] = useState(false)
    const[signedIn ,setSignedIn] = useState("")
    const [state, setState] = useState({
        name: "",
        email: "",
        password:""
    })
    useEffect(() => {
        if(state.name)
        axios.post('http://localhost:5000/api/account/register', {
            name:state.name,
            email:state.email,
            password:state.password
        })
            .then(data => data.data)
            .then(data => {
                if (data === "signedIn successfully") {
                    setSignUp(true)
                }
                else {
                    setSignedIn(data)
                }
            })
            .catch(err=>console.log(err))
    } , [state])
    const getValues = results => {
        setState({
            ...results 
        })
    }
    return (
        <div>
            {
                signUp?<FirstPage/>:<SignUpForm getValues={getValues}/>
        
            } 
            {' '}
            {
                <p className="text-center">{
                    signedIn
                }</p> 
            }
        </div>
    )
}

export default SignUp
