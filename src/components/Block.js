import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { calculateBlockShade, parseBlockDate } from '../helpers';

const StyledBtcBlock = styled.div`
  width: 100%;
  max-width: 225px;
  font-size: 1.4rem;
  text-align: center;
  background: ${props => props.theme.greyArray[props.shade]};
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.black};
  text-decoration: none;
  word-wrap: break-word;
`;

const StyledHeight = styled.div`
  font-size: 1.32em;
  font-weight: bold;
`;
const StyledTime = styled.div`
  font-size: 1em;
  font-weight: bold;
`;

const Block = ({ totalBTCSent, height, hash, href, time }) => {
  return (
    <StyledBtcBlock shade={calculateBlockShade(totalBTCSent)}>
      <StyledLink href={href} rel="nonoopener noreferrer" target="_blank" >
        <StyledHeight>BLOCK {height}</StyledHeight>
        <StyledTime>{parseBlockDate(time)}</StyledTime>
        {hash}
      </StyledLink>
    </StyledBtcBlock>
  )
}

Block.propTypes = {
  totalBTCSent: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  hash: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired
}

export default Block;