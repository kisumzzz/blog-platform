import Sidebar from '../../components/sidebar/Sidebar'
import './setting.css'
import img from '../../asset/img/img1.png'

export default function Setting() {
  return (
    <div className='setting'>
        <Sidebar/>
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingTitleUpdate">Update Your Account</span>
                <span className="settingTitleDelete">Delete Your Account</span>
            </div>
            <form className="settingForm">
                <label >Profile Picture</label>
                <div className="settingPP">
                    <img src={img} alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingPPIcon fa-solid fa-id-card"></i>
                    </label>
                    <input type="file" className="fileInput" style={{display: 'none'}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='username' />
                <label >Email</label>
                <input type="email"  placeholder='email'/>
                <label >Passwrod</label>
                <input type="password" />
                <button className="settingSubmitButton">Update</button>
            </form>
        </div>
        
    </div>
  )
}
