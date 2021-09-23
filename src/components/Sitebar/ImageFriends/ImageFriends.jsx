import React from 'react';
import c from './ImageFriends.module.css'

const ImageFriends = (props) => {
  console.log(props);
  
  return <div className={c.images}>
    {props.sitebarPage.map(sitebarEl => 
    {
        return <div ><img className={c.image} src={sitebarEl.imgUrl} /></div>
    })
  }
  </div> 
}

export default ImageFriends;