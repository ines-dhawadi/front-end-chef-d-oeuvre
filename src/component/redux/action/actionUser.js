import axios from "axios"
import {
  FOLLOW_USER,
  GET_USER,
  UNFOLLOW_USER,
  UPDATE_BIO,
  UPLOAD_PICTURE,
  GET_USER_ERRORS
} from "./type";





export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}idhcar/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};


export const uploadPicture = (data, id) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}idhcar/user/upload`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_USER_ERRORS, payload: res.data.errors });
        } else {
          dispatch({ type: GET_USER_ERRORS, payload: "" });
          return axios
            .get(`${process.env.REACT_APP_API_URL}idhcar/user/${id}`)
            .then((res) => {
              dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
            });
        }
      })
      .catch((err) => console.log(err));
  };
};

// export const updateBio = (userId, bio) => {
//   return (dispatch) => {
//     return axios({
//       method: "put",
//       url: `${process.env.REACT_APP_API_URL}idhcar/user/` + userId,
//       data: { bio },
//     })
//       .then((res) => {
//         dispatch({ type: UPDATE_BIO, payload: bio });
//       })
//       .catch((err) => console.log(err));
//   };
// };

// export const followUser = (followerId, idToFollow) => {
//   return (dispatch) => {
//     return axios({
//       method: "patch",
//       url: `${process.env.REACT_APP_API_URL}idhcar/user/follow/` + followerId,
//       data: { idToFollow },
//     })
//       .then((res) => {
//         dispatch({ type: FOLLOW_USER, payload: { idToFollow } });
//       })
//       .catch((err) => console.log(err));
//   };
// };

// export const unfollowUser = (followerId, idToUnfollow) => {
//   return (dispatch) => {
//     return axios({
//       method: "patch",
//       url: `${process.env.REACT_APP_API_URL}idhcar/user/unfollow/` + followerId,
//       data: { idToUnfollow },
//     })
//       .then((res) => {
//         dispatch({ type: UNFOLLOW_USER, payload: { idToUnfollow } });
//       })
//       .catch((err) => console.log(err));
//   };
// };
