import TYPES from './types';

const makeAwesome = () => ({
  type: TYPES.MAKE_AWESOME,
  value: true,
});

export default {
  makeAwesome,
};