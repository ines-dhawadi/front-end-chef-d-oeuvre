import axios from "axios";
import {
    GET_POSTS,
    GET_ALL_POSTS,
    ADD_POST,
    LIKE_POST,
    UNLIKE_POST,
    UPDATE_POST,
    DELETE_POST,
    ADD_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT ,
    GET_TRENDS,
    GET_POST_ERRORS

  } from "./type";

  

export const getPosts = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}idhcar/post/`)
      .then((res) => {
     
        dispatch({ type: GET_POSTS, payload: res.data });
        dispatch({ type: GET_ALL_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addPost = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}idhcar/post/`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_POST_ERRORS, payload: res.data.errors });
        } else {
          dispatch({ type: GET_POST_ERRORS, payload: "" });
        }
      });
  };
};

export const likePost = (postId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}idhcar/post/like-post/` + postId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: LIKE_POST, payload: { postId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const unlikePost = (postId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}idhcar/post/unlike-post/` + postId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: UNLIKE_POST, payload: { postId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const updatePost = (postId, message) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}idhcar/post/${postId}`,
      data: { message },
    })
      .then((res) => {
        dispatch({ type: UPDATE_POST, payload: { message, postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}idhcar/post/${postId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_POST, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const addComment = (postId, commenterId, text, commenterPseudo) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}idhcar/post/comment-post/${postId}`,
      data: { commenterId, text, commenterPseudo },
    })
      .then((res) => {
        dispatch({ type: ADD_COMMENT, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const editComment = (postId, commentId, text) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}idhcar/post/edit-comment-post/${postId}`,
      data: { commentId, text },
    })
      .then((res) => {
        dispatch({ type: EDIT_COMMENT, payload: { postId, commentId, text } });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteComment = (postId, commentId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}idhcar/post/delete-comment-post/${postId}`,
      data: { commentId },
    })
      .then((res) => {
        dispatch({ type: DELETE_COMMENT, payload: { postId, commentId } });
      })
      .catch((err) => console.log(err));
  };
};

// export const getTrends = (sortedArray) => {
//   return (dispatch) => {
//     dispatch({ type: GET_TRENDS, payload: sortedArray });
//   };
// };
