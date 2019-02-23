import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function AboutMe() {

  return(
    <div style={{
      color: '#69626D'
    }}>

      <h2 style={{
        letterSpacing: '5px'
      }}
      >About me...</h2>
      <Typography paragraph
        style={{
          color: '#69626D',
          letterSpacing: '2px'
      }}>
        About Me Section
        Honing in on my skills as a web developer after years of working in Education Administration. Finding ways to combine my experience and passion for international language with programming languages.
      </Typography>
    </div>

  )

}
