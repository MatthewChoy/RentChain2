import {
    GET_PROPERTY,
    ADD_PROPERTY,
    DELETE_PROPERTY,
    PROPERTY_LOADING
  } from '../actions/types';
  
  const initialState = {
    property: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ITEMS:
        return {
          ...state,
          property: action.payload,
          loading: false
        };
      case DELETE_ITEM:
        return {
          ...state,
          property: state.property.filter(item => item._id !== action.payload)
        };
      case ADD_ITEM:
        return {
          ...state,
          property: [action.payload, ...state.property]
        };
      case ITEMS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }