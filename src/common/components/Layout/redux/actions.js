import TYPES from './types';

const changeTheme = (themeName) => {
  return {
    type: TYPES.CHANGE_THEME,
    value: themeName,
  };
}

const setHeadLogoValues = (textColor, iconColor) => {
  return {
    type: TYPES.SET_HEAD_LOGO_VALUES,
    textColor: textColor,
    iconColor: iconColor,
  };
}

export default {
  changeTheme,
  setHeadLogoValues,
}