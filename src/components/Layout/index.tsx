import React from 'react';
import { Grid } from './styles'
// import { Container } from './styles';

import Skills from '../Skills'
import PersonalProfile from '../PersonalProfile';
import AboutMe from '../AboutMe'
import ContactBar from '../ContactBar'

const Layout: React.FC = () => {
  return (
      <Grid>
        <PersonalProfile />
        <AboutMe />
        <Skills />
        <ContactBar />
      </Grid>
  )
}

export default Layout;