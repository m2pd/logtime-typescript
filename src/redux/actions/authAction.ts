import { UserCurrent } from './../../containers/Account/pages/Main/index';
import { UserType } from './../../services/auth.service';
import { Action, ActionTypes } from './../../constaints/type';

import AuthService from '../../services/auth.service';
import userService from '../../services/user.service';
import { Dispatch } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface LoginSuccessAction {
    type: ActionTypes.loginSuccess;
    payload: {user: UserCurrent};
  }
  export interface LoginFailAction {
    type: ActionTypes.loginFail;
  }
  export interface LogoutAction {
    type: ActionTypes.logout;
  }

export const login = (user:UserType) => (dispatch:Dispatch<Action>) => {
    return AuthService.login(user)
    .then(data => {
        dispatch({
            type: ActionTypes.loginSuccess,
            payload:{user: data}
        });
        
        const idUser = JSON.parse(localStorage.getItem('infoUser') || "{}") ;
        console.log(idUser.id)
        userService.getUserId(idUser.id)
        .then(res => {
          dispatch({
              type:ActionTypes.getUser,
              payload: res.data
          })
          localStorage.setItem('currentUser',JSON.stringify(res.data))
      })
        toast.dismiss()
        toast.info("Đăng nhập thành công !", {
          position: toast.POSITION.TOP_LEFT
        });
        return Promise.resolve();
    },
    error => {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type:ActionTypes.loginFail,
      });

      dispatch({
        type: ActionTypes.setMessage,
        payload: message,
      });

      toast.error("Đăng nhập không thành công !", {
        position: toast.POSITION.TOP_LEFT
      });

      toast.warn("Vui lòng thử lại !", {
        position: toast.POSITION.TOP_LEFT
      });
      return Promise.reject();
    }
    )
    // return async (dispatch:any)=>{
    //     try {
    //         const response = await AuthService.login(user)
    //         dispatch({
    //             type: ActionTypes.loginSuccess,
    //             payload: {user: response.data}
    //         })
    //     } catch (error) {
    //         const message =
    //         (error.response &&
    //           error.response.data &&
    //           error.response.data.message) ||
    //         error.message ||
    //         error.toString();
    //       dispatch({
    //         type: ActionTypes.loginFail,
    //       });
    
    //       dispatch({
    //         type: ActionTypes.setMessage,
    //         payload: message,
    //       });
    //     }
    // }
}

export const logout = () => (dispatch:Dispatch<Action>) => {
  AuthService.logout();

  dispatch({
    type: ActionTypes.logout,
  })
}

// export const logout = ():LogoutAction => {
//     return {
//       type: ActionTypes.logout,
//     };
//   };