import React from 'react';
import { connect } from 'react-redux';
import { websocketConnect } from '../actions';
import { websocketUri } from '../constants';

import TransactionsGrid from '../components/TransactionsGrid'

const TransactionsGridContainer = class extends React.PureComponent {
  componentDidMount() {
    const { transactions, dispatch } = this.props
    if (transactions.length === 0) {
      dispatch(websocketConnect(websocketUri))
    }
  }

  render() {
    return < TransactionsGrid {...this.props} />
  }
}

const mapStateToProps = ({ transactions }) => {
  return { transactions }
}

export default connect(mapStateToProps)(TransactionsGridContainer)