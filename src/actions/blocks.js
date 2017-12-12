import axios from '../utils/axios';
import createAction from '../utils/create-action';
import * as actionTypes from '../constants';

// TODO: this file should be splited to multiple files

export const fetchBlocks = () =>
  (dispatch) => {
    dispatch(createAction(actionTypes.GET_BLOCK_LIST));
    return axios.get('/blocklist')
    .then(res => {
      dispatch(createAction(actionTypes.GET_BLOCK_LIST_SUCCESS, res.data ));
    })
    .catch((error) => {
      dispatch(createAction(actionTypes.GET_BLOCK_LIST_FAILURE, {
        error,
    }));
  });
};

export const fetchBlock = (blockNumber) =>
  (dispatch) => {
    dispatch(createAction(actionTypes.GET_BLOCK));
    return axios.get(`/block?number=${blockNumber}`)
    .then(res => {
      dispatch(createAction(actionTypes.GET_BLOCK_SUCCESS, res.data ));
    })
    .catch((error) => {
      dispatch(createAction(actionTypes.GET_BLOCK_FAILURE, {
        error,
    }));
  });
};

export const fetchAddress = (address) =>
  (dispatch) => {
    dispatch(createAction(actionTypes.GET_BLOCK));
    return axios.get(`/balance?address=${address}`)
    .then(res => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};

export const fetchNetworkState = () =>
  (dispatch) => {
    dispatch(createAction(actionTypes.GET_NETWORK_STATE));
    return axios.get('/network')
    .then(res => {
      dispatch(createAction(actionTypes.GET_NETWORK_STATE_SUCCESS, res.data ));
    })
    .catch((error) => {
      dispatch(createAction(actionTypes.GET_NETWORK_STATE_FAILURE, {
        error,
    }));
  });
};

export const fetchLatestTransactions = () =>
  (dispatch) => {
    dispatch(createAction(actionTypes.GET_LATESET_TRANSACTIONS));
    return axios.get('/transactionlist')
    .then(res => {
      dispatch(createAction(actionTypes.GET_LATESET_TRANSACTIONS_SUCCESS, res.data ));
    })
    .catch((error) => {
      dispatch(createAction(actionTypes.GET_LATESET_TRANSACTIONS_FAILURE, {
        error,
    }));
  });
};

export const fetchTransaction = (hash) =>
  (dispatch) => {
    dispatch(createAction(actionTypes.GET_TRANSACTION));
    return axios.get(`/transaction?hash=${hash}`)
    .then(res => {
      dispatch(createAction(actionTypes.GET_TRANSACTION_SUCCESS, res.data ));
      return res.data;
    })
    .catch((error) => {
      dispatch(createAction(actionTypes.GET_TRANSACTION_FAILURE, { error }));
      return error.data;
    });
};