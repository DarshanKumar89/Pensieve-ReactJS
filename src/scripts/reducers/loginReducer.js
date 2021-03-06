import React from 'react';

import { DO_LOGIN, DO_LOGIN_SUCCESS, DO_LOGIN_FAILURE } from './../actions/loginActions'

const initialLoginState = {
  user: {},
  isFetching: false,
  isError: false
}

export default function loginApp(state = initialLoginState, action) {
  switch (action.type) {
    case DO_LOGIN:
      return Object.assign({}, state, { isFetching: true }) /// use ...
    case DO_LOGIN_SUCCESS:
      return Object.assign({}, state, { isFetching: false })
    case DO_LOGIN_FAILURE:
      return Object.assign({}, state, { isFetching: false, isError: true })
    default:
      return state
  }
}