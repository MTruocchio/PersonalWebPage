import React from 'react';

import { Container, TextDescription } from './styles';

const AboutMe: React.FC = () => {
  return (
    <Container>
        <TextDescription> 
          
            <span className='fontPink'>2010 WEB AULA </span> 
            with a large experience in 
            <span className='fontYellow'> requirements gathering 
            , data modeling, functional specification</span> and development using mainly 
            <span className='fontGreen'> ASP.NET </span> 
           
          <br />
          <br />
            <span className='fontPink'>2013 Starline </span> 
            with a large experience in 
            <span className='fontYellow'> requirements gathering 
            , data modeling, functional specification</span> and development using mainly 
            <span className='fontGreen'> ASP.NET </span> 
          <br />
          <br />
            <span className='fontPink'>2015 Petronas </span> 
            with a large experience in 
            <span className='fontYellow'> requirements gathering 
            , data modeling, functional specification</span> and development using mainly 
            <span className='fontGreen'> ASP.NET </span> 
           
          
        </TextDescription>
    </Container>
  )
}

export default AboutMe;