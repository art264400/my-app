import React from 'react';
import c from './PersonalInfo.module.css';
import Avatar from './Avatar/Avatar';
import Personality from './Personalty/Personality';

const PersonalInfo = () => {
  return <div className={c.content}>
    <Avatar />
    <Personality />
  </div>
}

export default PersonalInfo;