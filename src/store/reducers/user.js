import { getToken } from "@/utils/auth";
const initialState = {
  token: getToken(),
};
export const user = (state = initialState, action) => {
  switch (action.type) {
    case "user/setToken":
      return {
        ...state,
        token: action.payload,
      };
    case "user/getUserInfo":
      console.log(1);
      return {
        ...state,
        name: action.payload,
      };
    // case "user/getUserInfo":

    default:
      return state;
  }
};
export default user;
