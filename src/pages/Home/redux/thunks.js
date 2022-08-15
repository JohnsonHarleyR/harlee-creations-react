import actions from './actions';

const helpMakeAwesome = () => (dispatch, getState) => {
  const state = getState();
  //console.log(`state: ${JSON.stringify(state)}`);
  if (!state.home.isAwesome) {
    alert `You are not awesome yet, but you will be!`;
    dispatch(actions.makeAwesome());
    const newState = getState();
    console.log(`newState: ${newState.home.isAwesome}`);
    if (newState.home.isAwesome) {
      alert `Ok, now you are awesome!`;
    } else {
      alert `Hmm... Why are you still not awesome? How did that happen?`;
    }
  } else {
    alert `You are already awesome, keep it up!`;
  }
}

export default {
  helpMakeAwesome,
};