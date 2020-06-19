import React from 'react';
import avatar from '../../assets/avatar.png'

import { Container } from './styles';

const PersonalProfile: React.FC = () => {
  return (
    <Container>
         <img src={avatar} className='imgProfile' />
    </Container>
  )
}

export default PersonalProfile;