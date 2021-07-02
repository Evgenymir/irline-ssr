import initialState from './initial-state';

const modalState = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MODAL_TOGGLE': {
      const { isModalShown } = action.payload;
      return {
        ...state,
        isModalShown,
      };
    }
    case 'SET_MODAL_FORM_NAME': {
      const { modalFormName } = action.payload;
      return {
        ...state,
        modalFormName,
      };
    }
    default: {
      return state;
    }
  }
};

export default modalState;
