import React, { useCallback } from 'react'; // useCallback: 함수를 캐싱, useMemo: 값을 캐싱
// import React, { useState, useCallback, useMemo } from 'react'; // useCallback: 함수를 캐싱, useMemo: 값을 캐싱
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useInput from '../hooks/useInput';

const ButtonWrapper = styled.div`
margin-top: 10px;
`;

const FormWrapper = styled(Form)`
padding: 10px;
`;

const LoginForm = (setIsLoggedIn) => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  // const [id, setId] = useState('');
  // // component에 props로 넘겨주는 함수는 userCallback을 써야 최적화가 되므로 필수!!!
  // const onChangeId = useCallback((e) => {
  //   setId(e.target.value);
  // }, []);

  // const [password, setPassword] = useState('');
  // const onChangePassword = useCallback((e) => {
  //   setPassword(e.target.value);
  // }, []);

  // const style = useMemo(() => ({ marginTop: 10 }), []); //리랜더링 되어도 같은 객체가 유지되기 때문에 리랜더링 최적화가 됨.

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true); // 더미데이터로 받아옴
  }, [id, password]);

  return ( // return 부분이 vertual-dom이라고 생각하면 됨.
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlForm="user-id">아이디</label>
        <br />
        <Input
          name="user-id"
          value={id}
          onChange={onChangeId}
          required
        />
      </div>
      <div>
        <label htmlForm="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        {/* <div style={style}> */}
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;