import actions from "./actions";

export const setHeadLogoColors = (textColor, iconColor) => async (
  dispatch,
) => {
  console.log('setting logo colors');
  dispatch(actions.setHeadLogoValues(textColor, iconColor));
}

export default {
  setHeadLogoColors,
};