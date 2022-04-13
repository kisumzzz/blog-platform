import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>Categories</span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>Travel</li>
                <li className='sidebarListItem'>Projects</li>
                <li className='sidebarListItem'>Study Notes</li>
                <li className='sidebarListItem'>Python</li>
                <li className='sidebarListItem'>JavaScript</li>
                <li className='sidebarListItem'>Leetcode</li>
            </ul>
        </div>
      
    </div>
  )
}
