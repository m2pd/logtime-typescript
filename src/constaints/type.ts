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

import { GetLogTime } from '../redux/actions/logtimeAction';

export enum ActionTypes {
  loginSuccess,
  loginFail,
  logout,

  getUser,
  updateUser,

  getLogtime,

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
  | GetUser
  | GetLogTime ;
