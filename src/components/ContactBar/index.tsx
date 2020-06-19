import React from 'react';
import {FiMail } from 'react-icons/fi'
import { FaWhatsapp} from 'react-icons/fa'
import { Container, BoxIconContact } from './styles';

const ContactBar: React.FC = () => {
  return (
    <Container>
        <BoxIconContact > <FiMail size={40}/> </BoxIconContact>
        <BoxIconContact > <FaWhatsapp size={40}/> </BoxIconContact>
    </Container>
  )
}

export default ContactBar;