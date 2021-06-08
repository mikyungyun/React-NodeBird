import React from 'react';
import PropTypes from 'prop-types';
import { List, Button, Card } from 'antd';
import { stopOutlined } from '@ant-design/icons';

const FollowList({ header, data }) => {
  return (
    <List
      style={{ marignBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={<div style={{ textAlign: 'center', margin: '10px 0' }}><Button>더 보기</Button></div>}
      bordered
      dataSource={data}
      renderItem={(Item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<stopOutlined key="stop" />]}>
            <Card.Meta description={Item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  )
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default FollowList;