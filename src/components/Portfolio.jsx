import React from 'react'
import Project from './Project';
import chessThumbnail from '../styles/media/chess.gif'
import portfolioThumbnail from '../styles/media/PortfolioScreenshot.png';
import boidsThumbnail from '../styles/media/boidsthumbnail.gif';

export default function Portfolio() {

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div id="showcase">
        <Project link="http://michaelmoreno.github.io"thumbnail={chessThumbnail} title="Chess" flairs={['jQuery', 'Game Logic']}/>
        <Project link="http://michaelmoreno.io/boids-algorithm/" thumbnail={boidsThumbnail} title="Flocking Simulation" flairs={['Physics','Canvas']}/>
        <Project thumbnail={portfolioThumbnail} title="Personal Site" flairs={['React', 'Nginx']}/>
      </div>
    </section>
  )
}
