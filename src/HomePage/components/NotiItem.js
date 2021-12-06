import React from 'react';
import styled from 'styled-components';

const NotiItem = ({ info }) => {
  return (
    <Content>
      <Action>{info}</Action>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
`;
const Action = styled.div`
  font-size: 18px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NotiItem;
