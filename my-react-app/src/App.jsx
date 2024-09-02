import './App.css'

function App() {

  return (
    <>
     <form>
  <div className="container">
    <h1>Sign Up</h1>
    <p>To add recipe create an account.</p>
    <hr />

    <label ><b>Email</b></label>  
    <input type="text" placeholder="Enter Email" name="email" required />
 

    <label ><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <label><b>Re-enter Password</b></label>
    <input type="password" placeholder="Re-enter Password" name="psw-repeat" required />
    
    
    <p>By creating an account you agree to our <a href="#" >Conditions and Requirements</a>.</p>

    <div className="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button type="submit" className="signupbtn">Sign Up</button>
    </div>
  </div>
</form>

    </>
  )
}

export default App
