import TYPES from './types';
import { ThemeName } from '../../../constants/enums';

const initialState = {
  themeName: ThemeName.DEFAULT,
  headLogoTextColor: '#000000',
  headLogoIconColor: '#000000',
}

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CHANGE_THEME:
      return {
        ...state,
        themeName: action.value,
      };
    case TYPES.SET_HEAD_LOGO_VALUES:
      return {
        ...state,
        headLogoTextColor: action.textColor,
        headLogoIconColor: action.iconColor,
      }
    default:
      return state;
  }
}

export default layoutReducer;