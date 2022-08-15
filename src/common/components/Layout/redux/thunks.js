import actions from "./actions";

export const setHeadLogoColors = (textColor, iconColor) => async (
  dispatch,
) => {
  dispatch(actions.setHeadLogoValues(textColor, iconColor));
}

export const setBodyLogoColors = (textColor, iconColor) => async (
  dispatch,
) => {
  dispatch(actions.setBodyLogoValues(textColor, iconColor));
}

export default {
  setHeadLogoColors,
  setBodyLogoColors,
};