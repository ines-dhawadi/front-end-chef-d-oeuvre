import { GET_USERS,REACT_APP_DELETE_Users } from "../action/type";

const initialState = {
  dataUsersss:[]
};

export default function usersReducer(state = initialState, action) {
  const {type,payload}= action
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        dataUsersss:payload,
    };

    case REACT_APP_DELETE_Users:
      return {
        ...state,
        dataUsersss: state.dataUsersss.filter(
          data => data._id !== payload
        )
      };
    default:
      return state;
  }
}
