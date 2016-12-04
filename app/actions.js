import { NetInfo } from 'react-native';

export const requestPerson = ({ index = 1 }) => {
  return (dispatch, getState) => {
    const { isConnected } = getState();

    dispatch({ type: 'INC_PERSON_INDEX' });
    const url = `https://swapi.co/api/people/${index}?format=json`;
    if (isConnected) {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: 'SAVE_PERSON', person: res });
        });
    } else {
      // TODO: Add to queue
      console.log('not connected');
    }
  };
};

export const connectionState = ({ status }) => {
  return { type: 'CHANGE_CONNECTION_STATUS', isConnected: status };
};
