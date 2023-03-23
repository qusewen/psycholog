import { AppDispatch } from "./store";

export const modalState = {
  SET_MODAL: 'SET_MODAL',

};




export const getModalState = () => (
  async (dispatch: AppDispatch) => {
    dispatch({ type: modalState.SET_MODAL })

  }
)