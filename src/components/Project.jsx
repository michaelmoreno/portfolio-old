import React from 'react'
import ChessSVG from '../styles/media/010-horse.svg';
import Flair from './Flair';

export default function Project(props) {
  return (
    <div className="project">
      <img src={props.thumbnail} alt="" />
      <p>{props.title}</p>
      <div className="flairs">
        <Flair flair="jQuery"/>
      </div>
    </div>
  )
}
