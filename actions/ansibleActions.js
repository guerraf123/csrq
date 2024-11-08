import {
  GET_ANSIBLE,
  ADD_ANSIBLE,
  DELETE_ANSIBLE,
  SET_LOADING,
  ANSIBLE_ERROR
} from './types';




export const getAnsible = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/AnsibleJobs');
    const data = await res.json();

    dispatch({
      type: GET_ANSIBLE,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ANSIBLE_ERROR,
      payload: err.response.statusText
    });
  }
};

export const addAnsible = ansible => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/AnsibleJobs', {
      method: 'POST',
      body: JSON.stringify(ansible),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_ANSIBLE,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ANSIBLE_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteAnsible = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/AnsibleJobs/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_ANSIBLE,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: ANSIBLE_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
