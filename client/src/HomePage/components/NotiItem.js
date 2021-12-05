import React from 'react';
import styled from 'styled-components';

const NotiItem = ({ info }) => {
  return (
    <Content>
      <Action className="action-noti">{info}</Action>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
`;
const Action = styled.div`
  font-size: 18px;
  margin-bottom: 1px;
`;

export default NotiItem;
