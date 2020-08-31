import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LoginForm from './LoginForm'
import FirstPage from './FirstPage'

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password:""
    })
    const [isLogged, setisLogged] = useState(false)
    const [error ,setError] = useState("")
    const getValues = form => {
        setFormData({
            ...form
        })
    }
    const request = async() => {
        try {
            const data = await axios.post('http://localhost:5000/api/account/login', {
                email: formData.email,
                password:formData.password
            })
            
            if (data.data === "logged") {
                setisLogged(true)
                setError("")
            }
            else
            setError(data.data)
            
        }
        catch (err) {
            console.log(err)
        }
        
    }
    useEffect(() => {
        if (formData.email)
            request()
        
    },[formData])
    return (
        <div className="container">
            {
                isLogged ?
                    <FirstPage/>
                :
                <LoginForm getValues={getValues}/>
                    
            }
            {
                '  '
            }
            {
                error?<h4 className="text-center">{error}</h4>:null
            }
       
        </div>
    )
}

export default Login
