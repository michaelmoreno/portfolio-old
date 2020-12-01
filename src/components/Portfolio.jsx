import React from 'react'
import Project from './Project';
import chessThumbnail from '../styles/media/chess.gif'

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div id="showcase">
        <Project thumbnail={chessThumbnail} title="Chess"/>
        <Project thumbnail={chessThumbnail} title="Chess"/>
        <Project thumbnail={chessThumbnail} title="Chess"/>
      </div>
    </section>
  )
}
