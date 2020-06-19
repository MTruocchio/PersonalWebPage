import React from 'react';
import { Grid } from './styles'
// import { Container } from './styles';

import Skills from '../Skills'
import PersonalProfile from '../PersonalProfile';
import AboutMe from '../AboutMe'
import ContactBar from '../ContactBar'
import SliderTimeLine from '../SliderTimeLine'
import Education from '../Education'
import Works from '../Works'

const Layout: React.FC = () => {
  return (
      <Grid>
        <PersonalProfile />
        <AboutMe />
        <Skills />
        <ContactBar />
        <Education />
        <Works />
        <SliderTimeLine />
      </Grid>
  )
}

export default Layout;