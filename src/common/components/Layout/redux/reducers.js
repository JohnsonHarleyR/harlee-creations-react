import TYPES from './types';
import { ThemeName } from '../../../constants/enums';

const initialState = {
  themeName: ThemeName.DEFAULT,
}

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CHANGE_THEME:
      return {
        ...state,
        themeName: action.value,
      };
    default:
      return state;
  }
}

export default layoutReducer;