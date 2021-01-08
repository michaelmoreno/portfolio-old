import React from 'react'
import Project from './Project';
import chessThumbnail from '../styles/media/chess.gif'
import portfolioThumbnail from '../styles/media/PortfolioScreenshot.png';

export default function Portfolio() {

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div id="showcase">
        <Project link="http://michaelmoreno.github.io"thumbnail={chessThumbnail} title="Chess" flairs={['jQuery', 'Game Logic']}/>
        <Project thumbnail={''} title="Chat App" flairs={['WebSockets','Authentication']}/>
        <Project thumbnail={portfolioThumbnail} title="Personal Site" flairs={['React', 'Nginx']}/>
      </div>
    </section>
  )
}
