import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import './App.css';
import TransactionsGridContainer from './containers/TransactionsGridContainer';
import BlocksGridContainer from './containers/BlocksGridContainer';
import BlockInfoPanelContainer from './containers/BlockInfoPanelContainer';
import WebsocketStatusPanelContainer from './containers/WebsocketStatusPanelContainer';

import { StyledRow, StyledColumn } from './styles/common';
import { theme } from './styles/constants';


const StyledColumnWithMediaQuery = styled(StyledColumn)`
  @media (max-width: 700px) {
    flex-direction: row;
    height: inherit;
    width: 100%;
  }
`;

const StyledRowWithMediaQuery = styled(StyledRow)`
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <StyledRowWithMediaQuery>
          <StyledColumnWithMediaQuery >
            <BlockInfoPanelContainer />
            <WebsocketStatusPanelContainer />
            <BlocksGridContainer />
          </StyledColumnWithMediaQuery>
          <TransactionsGridContainer />
        </StyledRowWithMediaQuery>
      </div>
    </ThemeProvider>
  );
}

export default App;
