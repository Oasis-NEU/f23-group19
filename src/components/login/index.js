import {useState} from "react";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return(
    <>
        <h1 className={"mt-3"}>Login</h1>
          <form onSubmit={e => e.preventDefault()}>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="form-control mb-1"
              placeholder="Username"
              value={username}/>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mb-1" placeholder="Password" type="password" value={password}/>
            <button
              className="btn btn-primary w-100"> Login
            </button>
          </form>
    </>
    )
}

export default Login