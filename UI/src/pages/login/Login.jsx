import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
        <form className="loginForm">
            <label className='loginTitle'>Username</label>
            <input type="text" placeholder='Enter your username...' className='loginInput'/>
            <label className='loginTitle'>Password</label>
            <input type="password" placeholder='Enter your password...' className='loginInput'/>
            <button className="loginButton">Login</button>
            <button className="loginRegisterButton">
              <Link className='link' to={'/register'}>Register</Link>
            </button>
        </form>
    </div>
  )
}
