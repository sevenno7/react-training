import { createSelector } from 'reselect';

const message = (state) => {
  return state.get("newProduct");
};

const selectMessageContainer = createSelector(
  message,
  message => {
    return { message: message.toJS().message }
  });

export default selectMessageContainer;