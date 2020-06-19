import React from 'react';

import { Container, TextDescription } from './styles';

const AboutMe: React.FC = () => {
  return (
    <Container>
      <TextDescription> 
          <span className='fontPink'>Sistemas de Informacao</span> 
          <span className='fontYellow'> Puc Minas </span>
          <span className='fontCyan'> 2019 </span> 
        <br />
        <br />
          <span className='fontPink'>iOS Developer</span> 
          <span className='fontYellow'> Framework Training Center </span>
          <span className='fontCyan'> 2016 </span> 
        <br />
        <br />
          <span className='fontPink'>Técnico em Informática</span> 
          <span className='fontYellow'> FUNEC </span>
          <span className='fontCyan'> 2011 </span> 
      </TextDescription> 
    </Container>
  )
}

export default AboutMe;