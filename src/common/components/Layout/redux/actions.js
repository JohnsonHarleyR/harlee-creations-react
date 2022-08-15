import { Themes } from '../../../constants/themes';
import TYPES from './types';

const changeTheme = (themeName) => {
  return {
    type: TYPES.CHANGE_THEME,
    value: themeName,
  };
}

export default {
  changeTheme,
}