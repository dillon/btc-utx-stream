import React from 'react';
import styled from 'styled-components';
import { StyledBlock } from '../styles/common';

const StyledBlockWithMargin = styled(StyledBlock)`
margin-bottom: 12px;
`;

const WebsocketStatusPanel = ({ websocketConnecting, websocketOpen, errorMessage }) => {
  return (
    <StyledBlockWithMargin>
      {websocketConnecting && <div>Websocket connecting...</div>}
      {websocketOpen && <div>Websocket connected</div>}
      {errorMessage && <div>{errorMessage}</div>}
    </StyledBlockWithMargin>
  )
}

export default WebsocketStatusPanel;