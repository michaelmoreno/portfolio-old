import React from 'react'
import ChessSVG from '../styles/media/010-horse.svg';
import Flair from './Flair';

export default function Project(props) {
  var flairsList = [];
  if (props.flairs !== undefined) {
    for (let flair of props.flairs) {
      flairsList.push(<Flair flair={flair}/>)
    }
  }
  
  return (
    <a className="project" href={props.link} target="_blank">
      <div className="thumbnail" style={{backgroundImage: `url(${props.thumbnail})`}}></div>
      <div id="label">
        <p>{props.title}</p>
        <div className="flairs">
          {flairsList}
        </div>
      </div>
    </a>
  )
}
