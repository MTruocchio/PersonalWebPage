import React from 'react';

import { Container, TextDescription } from './styles';

const AboutMe: React.FC = () => {
  return (
    <Container>
        <TextDescription> <p>
              <span className='fontPink'>Systems Analyst / Developer </span> 
              with a large experience in 
              <span className='fontYellow'> requirements gathering 
              , data modeling, functional specification</span> and development using mainly 
              <span className='fontGreen'> ASP.NET </span> 
              and 
              <span className='fontGreen'> Swift </span> 
              languages; <br />
              Passionate about 
              <span className='fontCyan'> javascript </span> 
              and its Stack 
              <span className='fontPink'> Node </span> 
              with 
              <span className='fontPink'> React </span> 
              and 
              <span className='fontPink'> React-Native </span>
              Experience in system integration through <span className='fontOrange'>REST</span> and <span className='fontOrange'>SOAP</span> services; <br />
          
Knowledge of <span className='fontGreen'>OO</span>, <span className='fontPink'>SOLID</span>, <span className='fontRed'>DDD</span>, <span className='fontYellow'>Bootstrap</span>, <span className='fontCyan'>SQL Server</span>, <span className='fontPink'></span>Mobile... <br/>
I have participated in the implementation of the agile development methodology <span className='fontOrange'>SCRUM</span> in two of the places where I worked.
I have already served as a development <span className='fontYellow'>team leader</span>, dividing and delegating activities, revising codes and defining the technologies to be used. 
</p>
        </TextDescription>
    </Container>
  )
}

export default AboutMe;