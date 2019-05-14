import React from 'react';
import { connect } from 'react-redux';

import BlockInfoPanel from '../components/BlockInfoPanel'

const BlockInfoPanelContainer = props => <BlockInfoPanel {...props} />

const mapStateToProps = state => {
  const { currentBlockHeight, unconfirmedTransactions } = state
  return { currentBlockHeight, unconfirmedTransactions }
}

export default connect(mapStateToProps)(BlockInfoPanelContainer)