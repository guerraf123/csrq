import {
  GET_ANSIBLE,
  ADD_ANSIBLE,
  DELETE_ANSIBLE,
  SET_LOADING,
  ANSIBLE_ERROR
} from '../actions/types';

const initialState = {
  ansible: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ANSIBLE:
      return {
        ...state,
        ansible: action.payload,
        loading: false
      };
    case ADD_ANSIBLE:
      return {
        ...state,
        ansible: [...state.ansible, action.payload],
        loading: false
      };
    case DELETE_ANSIBLE:
      return {
        ...state,
        ansible: state.ansible.filter(tech => tech.id !== action.payload),
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case ANSIBLE_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
