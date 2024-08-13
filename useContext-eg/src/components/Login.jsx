import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [username , setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handling submit")
        setUser({username, password})

    }

    return (
        <div className=' h-60 flex flex-col justify-evenly items-center border-2 border-red-600'>
            <h1 className=' border'>Login here</h1>
            <div className=' flex flex-col gap-5 border'>
                <div>
                    <label htmlFor="">User Name:</label>
                    <input type="text" 
                    placeholder='username'
                    value={username} 
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" 
                    placeholder='password' 
                    value={password} 
                    onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </div>

        </div>
    )
}
export default Login



// import React, {useState, useContext} from 'react'
// import UserContext from '../context/UserContext'

// function Login() {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     const {setUser} = useContext(UserContext)

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setUser({username, password})
//     }
//   return (
//     <div>
//         <h2>Login</h2>
//         <input type='text'
//         value={username}
//         onChange={(e) => setUsername(e.target.value) }
//         placeholder='username'  />
//         {" "}
//         <input type='text' 
//         value={password}
//         onChange={(e) => setPassword(e.target.value) }
//         placeholder='password'  />
//         <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }

// export default Login



