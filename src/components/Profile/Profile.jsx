import React from 'react';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Posts from './Posts/Posts';
import c from './Profile.module.css'

const Profile = () => {
  return <div className={c.content}>
    <PersonalInfo />
    <Posts />
  </div>
}

export default Profile;