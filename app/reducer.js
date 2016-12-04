const initialState = {
  personIndex: 1,
  people: [],
  actionQueue: [],
};

const reducer = (state = initialState, action) =>{
  switch (action.type) {
    case 'INC_PERSON_INDEX':
      return Object.assign({}, state, {
        personIndex: state.personIndex + 1,
      });
    case 'SAVE_PERSON':
      return Object.assign({}, state, {
        people: [action.person].concat(state.people),
      });
    case 'ADD_TO_ACTION_QUEUE':
      return Object.assign({}, state, {
        actionQueue: state.actionQueue.concat([action.payload]),
      });
    default:
      return state
  }
}

export default reducer;
