import {
  WEBSOCKET_REQUESTING,
  WEBSOCKET_OPEN,
  WEBSOCKET_CLOSE,
  WEBSOCKET_MESSAGE_TRANSACTION,
  WEBSOCKET_MESSAGE_BLOCK,
  WEBSOCKET_ERROR
} from './actions'

const initialState = {
  // websocket status
  websocketConnecting: false,
  websocketOpen: false,

  // meta data
  unconfirmedTransactions: 0,
  currentBlockHeight: 0,

  // error handling
  errorMessage: null,

  // arrays
  transactions: [],
  blocks: []

}


export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case WEBSOCKET_REQUESTING:
      return { ...state, websocketConnecting: true }
    case WEBSOCKET_OPEN:
      return { ...state, websocketConnecting: false, websocketOpen: true }
    case WEBSOCKET_CLOSE:
      return {
        ...state,
        websocketOpen: false,
        websocketConnecting: false,
        errorMessage: action.payload
      }
    case WEBSOCKET_MESSAGE_TRANSACTION:
      return {
        ...state,
        websocketOpen: true,
        websocketConnecting: false,
        errorMessage: null,
        unconfirmedTransactions: state.unconfirmedTransactions + 1,
        transactions: [action.payload, ...state.transactions.slice(0, 199)]
      }
    case WEBSOCKET_MESSAGE_BLOCK:
      return {
        ...state,
        websocketOpen: true,
        websocketConnecting: false,
        errorMessage: null,
        currentBlockHeight: action.payload.height,
        unconfirmedTransactions: 0,
        transactions: [],
        blocks: [action.payload, ...state.blocks.slice(0, 99)]
      }
    case WEBSOCKET_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        websocketConnecting: false,
        websocketOpen: false
      }
    default:
      return state
  }
}