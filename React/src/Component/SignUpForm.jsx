import React , {useState} from 'react'

function SignUpForm({getValues}) {
    const [form, setForm] = useState({
        name: "",
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
            name: "",
            email: "",
            password:""
        })
    }
    return (
        <div className="container">
            <h2>Sign up with us</h2>
            <form onSubmit = {handleSubmit}>
                <label>name</label>
                <br></br>
                <input
                    name="name"
                    value = {form.name}
                    type="text"
                    required
                    onChange = {handleInput}
                />
                <br></br>
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

export default SignUpForm
