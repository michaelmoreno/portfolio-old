import React from 'react'
import Project from './Project';
import chessThumbnail from '../styles/media/chess.gif'

export default function Portfolio() {

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div id="showcase">
        <Project link="http://michaelmoreno.github.io"thumbnail={chessThumbnail} title="Chess" flairs={['jQuery', 'Websockets', 'Node']}/>
        <Project thumbnail="" title="Chess" x={[]}/>
        <Project thumbnail={chessThumbnail} title="Chess" x={[]}/>
      </div>
    </section>
  )
}
