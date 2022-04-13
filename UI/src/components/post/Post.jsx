import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg'
      src="" alt="" />
      <div className="postInfo">
          <div className="postCats">
              <span className="postCat">Tech</span>
              <span className="postCat">Project</span>
          </div>
          <span className="postTitle">blog project</span>
          <hr />
          <span className="postDate">1 hour ago</span>
          <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </div>
    </div>
  )
}
