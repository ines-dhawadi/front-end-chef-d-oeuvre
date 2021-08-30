import { GET_USERS } from "../action/type";

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
    default:
      return state;
  }
}
