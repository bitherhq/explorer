import * as actionTypes from '../constants';

const initialState = {
  blocks: {},
  blockList: [],
  isFetchingBlock: false,
  isFetchingBlockList: false
};

const handleStates = {
  [actionTypes.GET_BLOCK_LIST]: (state, action) => {
    return { ...state, isFetchingBlockList: true };
  },
  [actionTypes.GET_BLOCK_LIST_SUCCESS]: (state, action) => {
    return { ...state, isFetchingBlockList: false, blockList: action.payload };
  },
  [actionTypes.GET_BLOCK_LIST_FAILURE]: (state, action) => {
    return { ...state, isFetchingBlockList: false };
  },
  [actionTypes.GET_BLOCK]: (state, action) => {
    return { ...state, isFetchingBlock: true };
  },
  [actionTypes.GET_BLOCK_SUCCESS]: (state, action) => {
    return {
      ...state,
      isFetchingBlock: false,
      blocks: {
        ...state.blocks,
        [action.payload.Number]: action.payload
      }
    };
  },
  [actionTypes.GET_BLOCK_FAILURE]: (state, action) => {
    return { ...state, isFetchingBlock: false };
  }
};

export default function(state = initialState, action) {

  if (typeof handleStates[action.type] === 'function') {
    return handleStates[action.type](state, action);
  }

  return state;
}
