import React from 'react'
import Project from './Project';
import chessThumbnail from '../styles/media/chess.gif'
import portfolioThumbnail from '../styles/media/PortfolioScreenshot.png';
import boidsThumbnail from '../styles/media/boidsthumbnail.gif';
import RADThumbnail from '../styles/media/RADThumbnail.PNG';
import CAThumbnail from '../styles/media/CAThumbnail.PNG';

export default function Portfolio() {

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div id="showcase">
        <Project 
          title="Flocking Simulation" flairs={['Physics', 'Quadtree']}
          link="http://michaelmoreno.io/boids-algorithm/"
          flairs={['Physics', 'Quadtree']}
          thumbnail={boidsThumbnail}/>
        <Project 
          title="Cellular Automata"
          link="http://michaelmoreno.io/cellular-automata"
          flairs={['Computer Science']}
          thumbnail={CAThumbnail}/>
        <Project 
          title="Chess"
          link="http://michaelmoreno.io/chess"
          flairs={['jQuery', 'Game Logic']}
          thumbnail={chessThumbnail}/>
        <Project 
          title="Academic Organization"
          link="https://www.realacademicdebate.org"
          flairs={['PHP', 'SQL']}
          thumbnail={RADThumbnail}/>
        <Project 
          thumbnail={portfolioThumbnail} 
          title="Personal Site" 
          flairs={['React', 'Nginx']}/>
      </div>
    </section>
  )
}
