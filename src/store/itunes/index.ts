import * as TYPES from './types';
import { ItunesState } from '../../common/interfaces';

const initialState : ItunesState = {
    loading: false,
    data: {
      count:0,
      tunes:[]
    },
    error: null
};

const itunesReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case TYPES.GET_SEARCH_DATA_START:
        return {
          ...state,
          loading: true
        };
      case TYPES.GET_SEARCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          data: action.payload
        };
      case TYPES.GET_SEARCH_DATA_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      case TYPES.GET_SEARCH_DATA_CLEAR:
        return {
          ...state,
          data: { count : null, tunes:[] },
          loading: false,
          error: null
        }
      default:
        return state;
    }
  }

  export default itunesReducer;
  