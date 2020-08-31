import React , {useState} from 'react'

function LoginForm({getValues}) {
    const [form, setForm] = useState({
        email: "",
        password:""
    })
    const handleInput = e => {
        const { name, value } = e.target
        setForm({
            ...form,[name]:value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        getValues(form)
        setForm({
            email: "",
            password:""
        })
    }
    return (
        <div className="container">
            <h2>Login </h2>
            <form onSubmit = {handleSubmit}>
                <label>email</label>
                <br></br>
                <input
                    type="email"
                    required
                    name="email"
                    value={form.email}
                    onChange = {handleInput}
                 />
                <br></br>
                <label>password</label>
                <br></br>
                <input
                    type="password"
                    required
                    name="password"
                    value={form.password}
                    onChange = {handleInput}
                />
                <br></br>
                <button className="btn btn-success mt-2">submit</button>
            </form>
        </div>
    )
}

export default LoginForm
