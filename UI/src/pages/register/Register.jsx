import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <form className="registerForm">
            <label className='registerTitle'>Email</label>
            <input type="email" placeholder='Enter your email...' className='registerInput'/>
            <label className='registerTitle'>Username</label>
            <input type="text" placeholder='Enter your username...' className='registerInput'/>
            <label className='registerTitle'>Password</label>
            <input type="password" placeholder='Enter your password...' className='registerInput'/>
            <button className="registerRegisterButton">Register</button>
        </form>
    </div>
  )
}
