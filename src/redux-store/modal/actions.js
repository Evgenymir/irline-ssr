export const setModalToggle = (isModalShown) => ({
  type: 'SET_MODAL_TOGGLE',
  payload: {
    isModalShown,
  },
});

export const setModalName = (modalFormName) => ({
  type: 'SET_MODAL_FORM_NAME',
  payload: {
    modalFormName,
  },
});
