export const requestPerson = ({ index = 1 }) => {
  return (dispatch) => {
    dispatch({ type: 'INC_PERSON_INDEX' });
    fetch(`https://swapi.co/api/people/${index}?format=json`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: 'SAVE_PERSON', person: res });
      })
  };
};
