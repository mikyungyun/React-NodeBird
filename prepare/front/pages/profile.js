import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditionForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followingList = [{ nickname: '미굥이' }, { nickname: '믹0' }, { nickname: '노드버드오피셜' }];
  const followerList = [{ nickname: '미굥이' }, { nickname: '믹0' }, { nickname: '노드버드오피셜' }];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditionForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  )
};

export default Profile;