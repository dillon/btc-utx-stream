import React from 'react';
import { connect } from 'react-redux';

import WebsocketStatusPanel from '../components/WebsocketStatusPanel'

const WebsocketStatusContainer = props => <WebsocketStatusPanel {...props} />

const mapStateToProps = ({ websocketConnecting, websocketOpen, errorMessage }) => {
  return { websocketConnecting, websocketOpen, errorMessage }
}

export default connect(mapStateToProps)(WebsocketStatusContainer)