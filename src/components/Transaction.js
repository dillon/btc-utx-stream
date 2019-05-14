import React from 'react';
import styled from 'styled-components';
import { calculateTransactionShade } from '../helpers';

const StyledTransaction = styled.div`
  display: table-row;
  width: 100%;
  color: ${({ theme }) => theme.black};
  background-color: ${props => props.theme.greenArray[props.shade]};
`;

const StyledAmount = styled.div`
text-align: right;
`;

const StyledLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3px 10px;
  margin: 1px;
  color: ${({ theme }) => theme.black};
  text-decoration: none;
`;

const StyledHash = styled.div`
  padding-left: 5px;
`;

const Transaction = ({ value, hash, href }) => {
  return (
    <StyledTransaction shade={calculateTransactionShade(value)}>
      <StyledLink href={href} rel="nonoopener noreferrer" target="_blank" >
        <StyledAmount>{(value / 100000000).toFixed(8)}BTC</StyledAmount>
        <StyledHash shade={calculateTransactionShade(value)}>{hash}</StyledHash>
      </StyledLink>
    </StyledTransaction >
  )
}

export default Transaction;