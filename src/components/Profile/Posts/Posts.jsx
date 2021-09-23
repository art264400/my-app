import React from 'react';
import Post from './Post/Post';
import c from './Posts.module.css'
const Posts = (props) => {
  debugger
  let newPostElement=React.createRef();
  let addPost = () =>{
    props.addPost(newPostElement.current.value)
  }
  return <div>
    Posts
    <textarea ref={newPostElement}></textarea>
    <button onClick={ addPost}>Add post</button>
    <button>Remove post</button>
     {props.posts.map(post => {
        return <Post message={post.message} likeCount={post.likeCount} />
     })
    }
  
    </div>
}

export default Posts;