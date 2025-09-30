import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.suraj-yadav-99798b34blinkedin.com/in//" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Suraj-Yadav-dev" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials