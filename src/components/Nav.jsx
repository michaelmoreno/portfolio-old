import React from 'react'
import HomeSVG from '../styles/media/home.svg';
import GithubSVG from '../styles/media/039-github.svg';
import LinkedinSVG from '../styles/media/027-linkedin.svg';
import EmailSVG from '../styles/media/052-send.svg';
import ProjectsSVG from '../styles/media/026-search-lineal.svg';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="#main"><img src={HomeSVG} alt="Home"/></a></li>
        <li><a href="https://github.com/michaelmoreno" target="_blank"><img src={GithubSVG} alt="GitHub"/></a></li>
        <li><a href="https://linkedin.com/in/michaelmoreno-dev/" target="_blank"><img src={LinkedinSVG} alt="GitHub"/></a></li>
        <li><a href="#contact"><img src={EmailSVG} alt="GitHub"/></a></li>
        <li><a href="#portfolio"><img src={ProjectsSVG} alt="GitHub"/></a></li>
        <li></li>
      </ul>
    </nav>
  )
}
