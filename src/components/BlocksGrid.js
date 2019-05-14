import React from 'react';
import styled from 'styled-components';
import Block from './Block';

const BlocksGridDiv = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: top;
  overflow: scroll;
  word-wrap: break-word;

  @media (max-width: 700px) {
    width: 100%;
    flex-direction: row;
  }
`;

const BlocksGrid = ({ blocks }) => {
  return (
    <BlocksGridDiv>
      {blocks.map((data) =>
        <Block
          key={data.hash}
          {...data} />
      )}
    </BlocksGridDiv>
  )
}

export default BlocksGrid;