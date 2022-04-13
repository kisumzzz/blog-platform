import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-circle-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}}/>
                <input 
                  type="text" 
                  placeholder='Title'
                  className='writeInput'
                  autoFocus={true} 
                />
            </div>
            <div className="writeFormGroup">
                <textarea 
                  placeholder='Your mood is...'
                  type='text'
                  className='writeInput writetext'>
                </textarea>
            </div>
            <button className='writeSubmit' type='submit'>Publish</button>
        </form>
      
    </div>
  )
}
