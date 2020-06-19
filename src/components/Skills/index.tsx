import React from 'react';

import { Container } from './styles';
import ProgressSkill from '../ProgressSkill'

const Skills: React.FC = () => {
  return (
    <Container>
        <ProgressSkill progress={80} when={2010} skill='.Net'></ProgressSkill>
        <ProgressSkill progress={40} when={2010} skill='Node'></ProgressSkill>
        <ProgressSkill progress={70} when={2010} skill='iOS'></ProgressSkill>
        <ProgressSkill progress={60} when={2010} skill='Android'></ProgressSkill>
        <ProgressSkill progress={20} when={2010} skill='Python'></ProgressSkill>
        <ProgressSkill progress={20} when={2010} skill='Angular'></ProgressSkill>
    </Container>
  )
}

export default Skills;