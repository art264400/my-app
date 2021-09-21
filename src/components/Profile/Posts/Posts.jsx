import React from 'react';
import Post from './Post/Post';
import c from './Posts.module.css'

const Posts = () => {
  return <div>
    Posts
    <textarea></textarea>
    <button>Add post</button>
    <button>Remove post</button>
    <Post />
    <Post />
    <Post />
    <Post />
    </div>
}

export default Posts;