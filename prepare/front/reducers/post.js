export const intialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '믹0',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpds.joins.com%2Fnews%2Fcomponent%2Fhtmlphoto_mmdata%2F202103%2F20%2Faaed7b1c-892b-44ba-a80a-d277596c7604.jpg&imgrefurl=https%3A%2F%2Fnews.joins.com%2Farticle%2F24016364&tbnid=RfdzGNFmSJ-uFM&vet=12ahUKEwi6hJXj3KLxAhXMed4KHctxDg8QMygGegUIARDDAQ..i&docid=rW4Gw1F1jO53NM&w=560&h=315&q=%EC%88%98%EB%8B%AC%20%EC%82%AC%EC%A7%84&ved=2ahUKEwi6hJXj3KLxAhXMed4KHctxDg8QMygGegUIARDDAQ',
    }, {
      src: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.epnnews.com%2Fnews%2Fphoto%2F202008%2F5216_6301_1640.jpg&imgrefurl=https%3A%2F%2Fwww.epnnews.com%2Fnews%2FarticleView.html%3Fidxno%3D5216&tbnid=BKvk9HMJgh0QSM&vet=12ahUKEwi6hJXj3KLxAhXMed4KHctxDg8QMygCegUIARC7AQ..i&docid=YmlxPGw2NwZJZM&w=600&h=540&q=%EC%88%98%EB%8B%AC%20%EC%82%AC%EC%A7%84&ved=2ahUKEwi6hJXj3KLxAhXMed4KHctxDg8QMygCegUIARC7AQ',
    }, {
      src: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fyt3.ggpht.com%2Fytc%2FAAUvwnh_uikq5K6vQ_VeeZ64dVTI8DYG5DZbVQF3xF4b2w%3Ds900-c-k-c0x00ffffff-no-rj&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCHXnnasv33y-tDilXip8s9A&tbnid=ZFcdzu29TFDZdM&vet=12ahUKEwi6hJXj3KLxAhXMed4KHctxDg8QMygfegUIARD7AQ..i&docid=Cf25E-GURRIVaM&w=900&h=900&itg=1&q=%EC%88%98%EB%8B%AC%20%EC%82%AC%EC%A7%84&ved=2ahUKEwi6hJXj3KLxAhXMed4KHctxDg8QMygfegUIARD7AQ',
    }],
    Comments: [{
      User: {
        nickname: 'hoho',
      },
      content: '안녕하세요^^!',
    }, {
      User: {
        nickname: 'hihi',
      },
      content: '수달이 참 귀엽네요~',
    }]
  }],
  imagePaths: [],
  postAdded: false,
}

const ADD_POST = 'ADD_POST'; // 액션 이름을 변수로 빼주는 게 좋음.
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터 입니다.',
  User: {
    id: 1,
    nickname: '미굥'
  },
  Images: [],
  Comments: [],
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts], // 불변성을 지켜야 함, 데이터를 앞에 추가해줘야 게시글 상단으로 올라감.
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;