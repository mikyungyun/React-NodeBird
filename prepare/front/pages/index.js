import { useSelector } from 'react-redux';
import React from 'react'; // next.js에선 안 써줘도 됨. 

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

// next는 pages라는 폴더를 인식하기 때문에 여기 안에 있는 파일들을 개별적인 페이지로 만들어 줌.

const Home = () => {
  const { isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => {
        return (
          <PostCard key={post.id} post={post} />
        );
      })}
    </AppLayout>
  );
}

export default Home;