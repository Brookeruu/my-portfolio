import React from 'react';
import Typography from '@material-ui/core/Typography';
import me from '../assets/images/me.jpg';
export default function AboutMe() {

  return(
    <div>

    <img  src={me}
    style={{
      width: '30%',
      borderRadius: '70%',
      alignItems: 'center',
      justify: 'center'
    }}></img>
      <h2>About me...</h2>
      <Typography paragraph>
        About Me Section
        Honing in on my skills as a web developer after years of working in Education Administration. Finding ways to combine my experience and passion for international language with programming languages.
      </Typography>
    </div>

  )

}
