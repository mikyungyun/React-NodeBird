export const intialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
}

export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  }
};

export const logoutAction = () => {
  return {
    type: 'LOG_OUT',
  }
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state, // 변경하고 싶지 않은 내용은 object spread로 참조관계 유지해주기.
        isLoggedIn: true, // 변경하고 싶은 내용만 선택적으로 수정해주면 됨.
        user: action.data,
      };
    case 'LOG_OUT':
      return {
        ...state, // 변경하고 싶지 않은 내용은 object spread로 참조관계 유지해주기.
        isLoggedIn: false, // 변경하고 싶은 내용만 선택적으로 수정해주면 됨.
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;