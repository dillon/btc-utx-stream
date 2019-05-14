// websocket actions
import { formatTransaction, formatBlock } from './helpers'

export const WEBSOCKET_REQUESTING = 'WEBSOCKET_REQUESTING'
export const WEBSOCKET_OPEN = 'WEBSOCKET_OPEN';
export const WEBSOCKET_CLOSE = 'WEBSOCKET_CLOSE'
export const WEBSOCKET_MESSAGE_TRANSACTION = 'WEBSOCKET_MESSAGE_TRANSACTION'
export const WEBSOCKET_MESSAGE_BLOCK = 'WEBSOCKET_MESSAGE_BLOCK'
export const WEBSOCKET_ERROR = 'WEBSOCKET_ERROR'

// other actions
export const BLOCK_CONFIRMED = 'BLOCK_CONFIRMED';
export const NEW_TRANSACTION = 'NEW_TRANSACTION';


function websocketRequesting() {
  return { type: WEBSOCKET_REQUESTING }
};

function websocketOpen() {
  return { type: WEBSOCKET_OPEN }
}

function websocketClose(message) {
  return {
    type: WEBSOCKET_CLOSE,
    payload: message
  }
}

function websocketMessageTransaction(data) {
  return {
    type: WEBSOCKET_MESSAGE_TRANSACTION,
    payload: data
  }
}

function websocketMessageBlock(data) {
  return {
    type: WEBSOCKET_MESSAGE_BLOCK,
    payload: data
  }
}

function websocketError(message) {
  return {
    type: WEBSOCKET_ERROR,
    payload: message
  }
}

export function websocketConnect(uri) {
  return function handleWebsocket(dispatch) {
    // alert client we're requesting to connect
    dispatch(websocketRequesting(uri))

    // open new websocket
    const ws = new WebSocket(uri)
    // handle response
    let timeout;
    function ping() {
      ws.send('{"op":"ping"}');
      timeout = setTimeout(() => {
        dispatch(websocketClose('disconnected'))
      }, 10000);
    }

    ws.onopen = () => {
      ws.send('{"op":"unconfirmed_sub"}')
      ws.send('{"op":"blocks_sub"}')
      ws.send('{"op":"ping_block"}')
      dispatch(websocketOpen());
      setInterval(ping, 7000);
      // setInterval(() => ws.send('{"op":"ping_block"}'), 5000) // for testing
    }
    ws.onclose = () => dispatch(websocketClose('disconnected'))
    ws.onmessage = event => {
      const message = JSON.parse(event.data)
      let block;
      let transaction;
      switch (message.op) {
        case 'pong':
          return clearTimeout(timeout);
        case 'utx':
          transaction = formatTransaction(message.x)
          return dispatch(websocketMessageTransaction(transaction))
        case 'block':
          block = formatBlock(message.x)
          return dispatch(websocketMessageBlock(block))
        default:
          return false
      }


    }
    ws.onerror = () => {
      return dispatch(websocketError('error connecting'))
    }
  }
}