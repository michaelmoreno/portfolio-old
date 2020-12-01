import React from 'react'

export default function Main() {
  const styling = {
    secondLevel: {
      margin: '0 0 0 17px',
    },
    thirdLevel: {
      margin: '0 0 0 33px',
    },
    fourthLevel: {
      margin: '0 0 0 54.5px',
    },
  }
  
  return (
    <section id="main">
      <div className="container">
        <div className="branding">
          <h1>Michael Moreno</h1>
          <h2>Full-Stack web developer</h2>
          <p>// I'm a software engineer currently based in Houston. </p>
        </div>
        <div className="code">
          <p className="text">const <span style={{color: '#fff'}}>aboutMe</span> = {`{`}</p>
          <p style={styling.secondLevel}><span className="key">name</span>:<span className="value"> 'Michael Moreno'</span>,</p>
          <p style={styling.secondLevel}><span className="key">email</span>:<span className="value"> 'michaelmoreno.dev@gmail.com'</span>,</p>
          <p style={styling.secondLevel}><span className="key">languages</span>: [</p>
          <p style={styling.thirdLevel}><span className="value">'JavaScript'</span>,</p>
          <p style={styling.thirdLevel}><span className="value">'Python'</span>,</p>
          <p style={styling.thirdLevel}><span className="value">'HTML/CSS'</span>,</p>
          <p style={styling.thirdLevel}><span className="value">'PHP/MySQL'</span>,</p>
          <p style={styling.secondLevel}>],</p>
          <p style={styling.secondLevel}><span className="key">technologies</span>: [</p>
          <p style={styling.thirdLevel}><span className="value">'React'</span>,</p>
          <p style={styling.thirdLevel}><span className="value">'jQuery'</span>,</p>
          <p style={styling.thirdLevel}><span className="value">'Express'</span>,</p>
          <p style={styling.thirdLevel}><span className="value">'MongoDB'</span>,</p>
          <p style={styling.thirdLevel}><span className="value">'Git'</span>,</p>
          <p style={styling.thirdLevel}><span className="value">'SSH'</span>,</p>
          <p style={styling.thirdLevel}><span className="value">'Sass'</span>,</p>
          <p style={styling.secondLevel}>],</p>
          <p style={styling.secondLevel}><span className="key">workflow</span>: {'{'}</p>
          <p style={styling.thirdLevel}><span className="key">operatingSystem</span>: <span className="value">'Linux'</span>,</p>
          <p style={styling.thirdLevel}><span className="key">IDE</span>: [</p>
          <p style={styling.fourthLevel}><span className="value">'VSCode'</span>,</p>
          <p style={styling.fourthLevel}><span className="value">'Atom'</span>,</p>
          <p style={styling.fourthLevel}><span className="value">'IntelliJ'</span>,</p>
          <p style={styling.thirdLevel}>],</p>
          <p style={styling.secondLevel}>{'}'},</p>
          <p>{`};`}</p>
        </div>
      </div>
    </section>
  )
}
