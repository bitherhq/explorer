import * as actionTypes from '../constants';

const initialState = {
  networkState: {},
  isFetchingNetworkState: false,
  latesetTransactions: [],
  isFetchingLatestTransactions: false
};

const handleStates = {
  [actionTypes.GET_NETWORK_STATE]: (state, action) => {
    return { ...state, isFetchingNetworkState: true };
  },
  [actionTypes.GET_NETWORK_STATE_SUCCESS]: (state, action) => {
    return { ...state, isFetchingNetworkState: false, networkState: action.payload };
  },
  [actionTypes.GET_NETWORK_STATE_FAILURE]: (state, action) => {
    return { ...state, isFetchingNetworkState: false };
  },
  [actionTypes.GET_LATESET_TRANSACTIONS]: (state, action) => {
    return { ...state, isFetchingLatestTransactions: true };
  },
  [actionTypes.GET_LATESET_TRANSACTIONS_SUCCESS]: (state, action) => {
    return { ...state, isFetchingLatestTransactions: false, latesetTransactions: action.payload };
  },
  [actionTypes.GET_LATESET_TRANSACTIONS_FAILURE]: (state, action) => {
    return { ...state, isFetchingLatestTransactions: false };
  }
};

export default function(state = initialState, action) {

  if (typeof handleStates[action.type] === 'function') {
    return handleStates[action.type](state, action);
  }

  return state;
}
