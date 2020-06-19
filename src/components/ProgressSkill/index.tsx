import React from 'react';
// import { Container } from './styles';
import { BoxSkill } from './styles'
import {FaAppStore, FaNodeJs, FaAngular, FaOldRepublic, FaPython, FaAndroid} from 'react-icons/fa'
import { CircularProgressbarWithChildren , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export interface Props{
    progress?: number;
    when?: number;
    skill?: string;
}

const ProgressSkill: React.FC<Props> = ({
    progress,
    when,
    skill
}) => {
  return (
    <BoxSkill>
        <CircularProgressbarWithChildren value={progress as number} 
              styles={buildStyles({
                textColor: "#FFF",
                pathColor: "var(--skillBar)",
                trailColor: "Black"
              })}>
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
          {(skill == 'Node') && <FaNodeJs size={40} />}
          {(skill == 'Angular')  && <FaAngular size={40} />}
          {(skill == '.Net')  && <FaOldRepublic size={40} />}
          {(skill == 'iOS')  && <FaAppStore size={40} />}
          {(skill == 'Android')  && <FaAndroid size={40} />}
          {(skill == 'Python')  && <FaPython size={40} />}
          

          </CircularProgressbarWithChildren>
          <div style={{ fontSize: 12, color: 'grey' }}> {skill} </div>
       
    </BoxSkill>
  );
}

export default ProgressSkill;