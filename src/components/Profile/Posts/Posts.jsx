import React from 'react';
import Post from './Post/Post';
import c from './Posts.module.css'

const Posts = (props) => {
  return <div>
    Posts
    <textarea></textarea>
    <button>Add post</button>
    <button>Remove post</button>
     {props.posts.map(post => {
        return <Post message={post.message} likeCount={post.likeCount} />
     })
    }
  
    </div>
}

export default Posts;