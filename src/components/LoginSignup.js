import { useState } from 'react'
import './LoginSignup.css'
const LoginSignup = () => {

  const [data, setData] = useState("Sign Up")

  return (
    <>
      <div id='container'>
        <div className='header'>
          <div className='headerContent'>{data}</div>
        </div>
        <div className='inputs'>
          {data === "Login" ? <div></div> :
            <div className='inputValues'>
              <i className="fa-solid fa-user"></i>
              <input type='text' placeholder='User Id' />
            </div>
          }
          <div className='inputValues'>
            <i className="fa-solid fa-envelope"></i>
            <input type='email' placeholder='Email Id' />
          </div>
          <div className='inputValues'>
            <i className="fa-solid fa-lock"></i>
            <input type='password' placeholder='Password' />
          </div>
        </div>

        {data === "Sign Up" ? <div></div> :
          <div className='passwordIssue'>
            Forgot Password?
            <span >Click Here!</span>
          </div>
        }
        <div className='submitLoginValues'>
          <div className={data === "Login" ? "submit colorChange" : "submit"} onClick={() => { setData("Sign Up") }} >Sign Up</div>
          <div className={data === "Sign Up" ? "submit colorChange" : "submit"} onClick={() => { setData("Login") }} >Login</div>
        </div>
      </div>
    </>
  )
}

export default LoginSignup
