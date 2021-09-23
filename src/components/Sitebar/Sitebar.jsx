import React from 'react';
import ImageFriends from './ImageFriends/ImageFriends';
import c from './Sitebar.module.css'


const Sitebar = (props) => {
  return <div className={c.content}>
    <div className={c.friendsLabel}>
      Friends
    </div>
    <ImageFriends sitebarPage={props.sitebarPage} />
    </div>
}

export default Sitebar;