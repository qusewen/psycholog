
import { modalState } from './modalAction';

const initialState = {
  modalSet: false,
};

export const reduserModalState = (state = initialState, action: any) => {
  switch (action.type) {
    case modalState.SET_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case 'openModal':
      return { ...state, modalSet: true };
    case 'closeModal':
      return { ...state, modalSet: false };
    default:
      return state;
  }
};