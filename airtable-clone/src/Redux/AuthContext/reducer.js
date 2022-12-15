
import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS  } from "./actionTypes";

const SignUpState = {
    createAccountLoading: false,
    successCreate: false,
    createError: false,
    userData: [],
     isAuth: false,
  isLoading: false,
  isError: false,
};

export const reducer = (state=SignUpState,type,payload) => {
    switch(type){
        case SIGNUP_REQUEST:
      return {
        ...state,
        createAccountLoading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        createAccountLoading: false,
        successCreate: true,
        createError: false,
        userData: payload,
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        createAccountLoading: false,
        successCreate: false,
        creatError: true,
      };
         case SIGNIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        userData: payload,
        isError: false,
      };

    case SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        userData: [],
      };
        default : return state;
    }
};

