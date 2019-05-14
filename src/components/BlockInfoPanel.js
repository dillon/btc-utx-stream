import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledBlock, StyledRow } from '../styles/common';

const StyledTitle = styled.div`
  font-size: 4.2em;
  font-weight: bold;
`;

const StyledUnconfirmedTransactions = styled.div`
  font-size: 1.4em;
  font-weight: bold;
  padding: 15px;
`;

const StyledLabel = styled.div`
  font-size: 1em;
`;

const StyledCenteredRow = styled(StyledRow)`
  align-items: center;
  justify-content: space-between;

  @media (max-width:700px) {
    justify-content: flex-start;
  }
`;

const BlockInfoPanel = ({ currentBlockHeight, unconfirmedTransactions }) => {
  return (
    <StyledBlock>
      <StyledTitle>{currentBlockHeight || '000000'}</StyledTitle>
      <StyledCenteredRow>
        <StyledLabel>Seen Transactions<br /> in Current Block:</StyledLabel>
        <StyledUnconfirmedTransactions>{unconfirmedTransactions}</StyledUnconfirmedTransactions>
      </StyledCenteredRow>
    </StyledBlock>
  )
}

BlockInfoPanel.propTypes = {
  currentBlockHeight: PropTypes.number.isRequired,
  unconfirmedTransactions: PropTypes.number.isRequired,
}

export default BlockInfoPanel;