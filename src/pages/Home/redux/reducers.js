import TYPES from './types';

const initialState = {
  isAwesome: false,
  selectedAlert: null,
};

const homeReducer = (state = initialState, action) => {
  //console.log('home reducer');
  switch(action.type) {
    case TYPES.MAKE_AWESOME:
      //console.log(`MAKE_AWESOME - value: ${action.value}`);
      return {
        ...state,
        isAwesome: action.value,
      };
    default:
      //console.log(`home reducer - default`);
      return {...state};
  }
}

export default homeReducer;