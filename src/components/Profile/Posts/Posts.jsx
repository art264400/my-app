import React from 'react';
import Post from './Post/Post';
import c from './Posts.module.css'
const Posts = (props) => {
  let newPostElement = React.createRef();
  let addPost = () =>{
    props.addPost();
  }
  let onPostChange = () => {
    props.updateNewPostText(newPostElement.current.value);
    console.log(newPostElement.current.value);
  }
  return <div>
    Posts
    <textarea value={props.newPostText} onChange={ onPostChange } ref={newPostElement}></textarea>
    <button onClick={ addPost }>Add post</button>
    <button>Remove post</button>
     {props.posts.map(post => {
        return <Post message={post.message} likeCount={post.likeCount} />
     })
    }
    </div>
}

export default Posts;