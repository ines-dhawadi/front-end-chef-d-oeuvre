import axios from "axios";
import {GET_USERS,REACT_APP_DELETE_Users} from './type'
import {deleteUsers} from '../requests/requestUserss'

export const getUsers = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}idhcar/user`)
      .then((res) => {
        dispatch({ type: GET_USERS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

 // delete client 


 export const deleteUsersA = (id)=> async (dispatch) => {
  try {
    await deleteUsers  (id);
    dispatch({
      type:REACT_APP_DELETE_Users,
      payload:id
  })
    console.log("delete")
    dispatch(getUsers);
  } catch (error) {
    console.log(error);
  }
};
