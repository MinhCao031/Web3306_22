import React from 'react';
import styled from 'styled-components';

const NotiItem = () => {
  return (
    <Content>
      <div>
        <Action className="action-noti">
            <strong>Nguyễn Minh Thái</strong> đã bình luận vào bài đăng của bạn
        </Action>
        <TimeAgo className="time-noti">20 giây trước</TimeAgo>
      </div>
      
    </Content>
  );
};

const Content = styled.div`
  display: flex;
`;
const Action = styled.div`
  font-size: 21px;
  margin-bottom: 1px;
`;
const TimeAgo = styled.div`
  font-size: 15px;
  margin-bottom: 1px;
`;

export default NotiItem;
