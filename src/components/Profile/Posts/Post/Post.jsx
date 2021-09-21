import React from 'react';
import c from './Post.module.css'

const Post = (props) => {
  return <div className={c.content}>
    <div>{props.message}</div>
    <div><img className={c.item} src="https://pbs.twimg.com/profile_banners/352167265/1443363952/1500x500" /></div>
    <div>
      <span>like: {props.likeCount}</span>
    </div>
  </div>
}

export default Post;