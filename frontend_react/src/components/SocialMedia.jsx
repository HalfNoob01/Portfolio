import React from 'react'
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://twitter.com/Mahato_Sanjay01" target='__blank'><BsTwitter /></a>
      </div>
      <div>
      <a href="https://www.linkedin.com/in/sanjay-mahato-4aab59215/" target='__blank'> <BsLinkedin/></a>
      </div>
      <div>
       <a href='https://github.com/HalfNoob01' target='__blank'><BsGithub /></a> 
      </div>
    </div>
  )
}

export default SocialMedia
