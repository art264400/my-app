import React from 'react';
import c from './Post.module.css'

const Post = () => {
  return <div className={c.content}>
    <img className={c.item} src="https://pbs.twimg.com/profile_banners/352167265/1443363952/1500x500" />
    <div><span>like</span></div>
    </div>
}

export default Post;