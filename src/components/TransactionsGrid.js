import React from 'react';
import styled from 'styled-components';
import Transaction from './Transaction';
import { StyledBlock } from '../styles/common';

const TransactionGridDiv = styled(StyledBlock)`
	display: inline-block;
	vertical-align: top;
  overflow: auto;
  flex: 1;
`;

const TransactionsGrid = ({ transactions }) => {
  return (
    <TransactionGridDiv>
      {transactions.map((data) =>
        <Transaction
          key={data.hash}
          {...data} />
      )}
    </TransactionGridDiv>
  )
}

export default TransactionsGrid;