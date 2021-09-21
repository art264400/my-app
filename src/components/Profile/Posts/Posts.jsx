import React from 'react';
import Post from './Post/Post';
import c from './Posts.module.css'

const Posts = () => {
  return <div>
    Posts
    <textarea></textarea>
    <button>Add post</button>
    <button>Remove post</button>
    <Post message='Hi, how are you?' likeCount='20' />
    <Post message="It's my first post" likeCount='10' />
    <Post />
    </div>
}

export default Posts;