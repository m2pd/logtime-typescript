import { GetUser, UpdateUser } from './../redux/actions/userAction';
import {
  ClearMessageAction,
  SetMessageAction,
} from './../redux/actions/messageAction';

import {
  LoginSuccessAction,
  LoginFailAction,
  LogoutAction,
} from './../redux/actions/authAction';

export enum ActionTypes {
  loginSuccess,
  loginFail,
  logout,

  getUser,
  updateUser,

  setMessage,
  clearMessage,
}

export type Action =
  | SetMessageAction
  | ClearMessageAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction
  | UpdateUser
  | GetUser;
