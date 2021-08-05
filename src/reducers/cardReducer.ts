import { actionTypes, TCryptoActions } from "../types/types";
import { ISelectedCrypto } from "../types/interfaces";

const initialState: ISelectedCrypto = {
  selectedCrypto: [],
  getGraphsItems: [],
};

type TCardReducer = (state: ISelectedCrypto, action: TCryptoActions) => ISelectedCrypto;

const cardReducer: TCardReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case actionTypes.SELECTED_CRYPTO: {
      return {
        ...state,
        selectedCrypto: action.payload
      }
    }

    case actionTypes.GET_GRAPHS_ITEMS: {
      return {
        ...state,
        getGraphsItems: action.payload
      }
    }

    default: return state;
  }
}

export { cardReducer };