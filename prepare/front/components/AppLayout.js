import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import UserProfile from '../components/UserProfile';
import LgoinForm from '../components/LoginForm';

const SearchInput = styled(Input.Search)`
vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  // 리덕스라는 중앙 관리소가 있기 때문에 더 이상 필요하지 않음.
  // const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  // isLoggedIn이 변경되면 AppLayout이 리랜더링 됨. 

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}> {/* gutter 컬럼 사이의 간격을 줄 때 사용  */}
        <Col xs={24} md={6} >
          {isLoggedIn ? <UserProfile /> : <LgoinForm />}
        </Col>
        <Col xs={24} md={12} >
          {children}
        </Col>
        <Col xs={24} md={6} >
          <a href="https://www.instagram.com/whopper_hunter" target="_blank" rel="noreferrer noopener"> Made by Macyungc</a>
        </Col>
      </Row>

    </div >
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;