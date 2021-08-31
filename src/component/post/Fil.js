import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/action/actionPost";
import CardChat from "./cardChat";
import { isEmpty } from "../Utils";

const Thread = () => {
  const [loadPost, setLoadPost] = useState(true);
  const [count, setCount] = useState(5);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postStore);

//   const loadMore = () => {
//     if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) {
//       setLoadPost(true);
//     }
//   }

  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts());
      setLoadPost(false);
      //setCount(count + 5);
    }

    //window.addEventListener('scroll', loadMore);
    //return () => window.removeEventListener('scroll', loadMore);
  },[loadPost, dispatch, count]);

  return (
    <div className="thread-container">
      <ul>
          
        {!isEmpty(posts[0]) &&
          posts.map((post) => (
           <div ><li >
             <CardChat post={post}  key={post._id}/>
             </li>
            </div> 
         ))}
      </ul>
    </div>
  );
};

export default Thread;
