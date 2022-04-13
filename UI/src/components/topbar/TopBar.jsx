import './topbar.css'
import { Link } from 'react-router-dom'
import img from '../../asset/img/img1.png'

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-github"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        </div>
        <div className='topCenter'>
            <ul className="topList">
                <li className='topListItem'>
                  <Link className='link' to={"/"}>HOME</Link>
                </li>
                <li className='topListItem'>
                  <Link className='link' to={'/'}>ABOUT</Link>
                </li>
                <li className='topListItem'>
                  <Link className='link' to={"/"}>DIARY</Link>
                </li>
                <li className='topListItem'>
                  <Link className='link' to={'/write'}>WRITE</Link>
                </li>
                <li className='topListItem'>
                  {/** if user = true: show LOGOUT */}
                  {user && "LOGOUT"} 
                </li>
            </ul>
        </div>
        <div className='topRight'>
            {
              user ? (
                <img 
                  className='topImg'
                  src={img} alt="" />
              ) : (
                <ul className='topList'>
                  <li className="topListItem">
                    <Link className='link' to={"/login"}>LOGIN</Link>
                  </li>
                  <li className="topListItem">
                    <Link className='link' to={"/register"}>REGISTER</Link>
                  </li>
                </ul>
              )
            }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
