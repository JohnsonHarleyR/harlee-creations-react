import TYPES from './types';
import { ThemeName } from '../../../constants/enums';
import { MenuLinks } from '../../../constants/menu-items';

const initialState = {
  themeName: ThemeName.DEFAULT,
  headLogoTextColor: '#000000',
  headLogoIconColor: '#000000',
  bodyLogoTextColor: '#000000',
  bodyLogoIconColor: '#000000',

  menuItems: MenuLinks,
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
    case TYPES.SET_BODY_LOGO_VALUES:
      return {
        ...state,
        bodyLogoTextColor: action.textColor,
        bodyLogoIconColor: action.iconColor,
      }
    default:
      return state;
  }
}

export default layoutReducer;