import { Navigate } from "react-router";
import { useState } from "react";

const RegisterPage = () => { 
    const [driver, setDriver] = useState(false);
 
    return (
      <>
        <div className="mt-3">
          <h1 style={{ textAlign: "center" }}>Travel__</h1>
          <h2 style={{fontWeight: "inherit", textAlign: "center"}}>Sign up</h2>
        </div>
        <div className="d-flex justify-content-center">
          <form style={{ width: "50%", marginTop: "50px" }}> 
          
            <div>
              <label for="firstName">
                <b>First Name</b>
              </label><br/>
              <input id="input1" style={{height: "60px", width: "100%"}} />
            </div>
            <div>
            <label for="lastName" style={{marginTop: "10px"}}>
                <b>Last Name</b>
              </label><br/>
              <input id="input2" style={{height: "60px", width: "100%"}} />
              </div>
            <div>
              <label for="email" style={{marginTop: "10px"}}>
                <b>Email</b>
              </label><br/>
              <input id="input3" style={{height: "60px", width: "100%"}} />
            </div>
            <div>
              <label for="username" style={{marginTop: "10px"}}>
                <b>Username</b>
              </label><br/>
              <input id="input4" style={{height: "60px", width: "100%"}} />
            </div>
            <div>
              <label for="password" style={{marginTop: "10px"}}>
                <b>Password</b>
              </label><br/>
              <input id="input5" style={{height: "60px", width: "100%"}} />
            </div>
            <div style={{marginTop: "10px"}}>
                <input onChange={(e) => setDriver(e.target.checked)} className="form-check-input" 
                type="checkbox" checked={driver} id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault" style={{marginLeft: "10px"}}>
                    Want to be a driver?
                </label>
            </div>
            {driver && <div>
                <label for="driverId" style={{marginTop: "10px"}}>
                  <b>Driver's ID</b>
                </label><br/>
                <input id="input6" style={{height: "60px", width: "100%"}} />
              </div>}
                
          </form>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-secondary rounded-pill" style={{width:"50%", marginTop: "20px"}}><span style={{color: "black"}}>Sign up</span></button>
        </div>
      </>
    )
  }
  
  export default RegisterPage;