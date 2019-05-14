import React from 'react';
import { connect } from 'react-redux';

import BlocksGrid from '../components/BlocksGrid'

const BlocksGridContainer = props => <BlocksGrid {...props} />

const mapStateToProps = ({ blocks }) => {
  return { blocks }
}

export default connect(mapStateToProps)(BlocksGridContainer)