const LoginPage = () => { 
  return (
    <>
      <div className="mt-3">
        <h1 style={{ textAlign: "center" }}>Travel__</h1>
        <h2 style={{fontWeight: "inherit", textAlign: "center"}}>Sign in</h2>
      </div>
      <div className="d-flex justify-content-center">
        <form style={{ width: "50%", marginTop: "50px" }}> 
          <div>
            <label for="email">
              <b>Email</b>
            </label><br/>
            <input id="email" style={{height: "60px", width: "100%"}} />
          </div>
          <div>
            <label for="email" style={{marginTop: "40px"}}>
              <b>Password</b>
            </label><br/>
            <input id="email" style={{height: "60px", width: "100%"}} />
          </div>
          <div>
            <div className="d-flex justify-content-between" style={{marginTop: "20px"}}>
              <div>
                <input type="checkbox" id="remember-me" name="remmeber-me" value="no" />
                <label for="vehicle1">Remember me</label>
              </div>
              <span>Forgot password?</span>
            </div>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-secondary rounded-pill" style={{width:"50%", marginTop: "20px"}}><span style={{color: "black"}}>Sign in</span></button>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-secondary rounded-pill" style={{width:"50%", marginTop: "20px"}}><span style={{color: "black"}}>Sign up</span></button>
      </div>
    </>
  )
}

export default LoginPage;