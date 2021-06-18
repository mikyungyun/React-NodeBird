import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import post from './post';


const intialState = {
  user: {
  },
  post: {
  },
};

// 사용자가 데이터를 어떻게 입력할지 모르기때문에 data를 동적으로 받음.
// action creator
const changeNickname = (data) => {
  return {
    type: 'CHANGE_NICKNAME',
    data,
  }
};

// ( 이전상태, 액션 ) => 다음상태
const rootReducer = combineReducers({
  // HYDRATE를 위해서(서버사이드랜더링) index reducer를 추가해 줌.
  index: (state = {}, action) => {
    switch (action.type) {
      case 'HYDRATE':
        console.log('HYDRATE', action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;