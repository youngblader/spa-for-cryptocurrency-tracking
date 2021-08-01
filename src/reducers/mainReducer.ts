import { actionTypes, TCryptoActions } from "../types/types";
import { ICrypto } from "../types/interfaces";

const initialState: ICrypto = {
  crypto: [],
};

type TMainReducer = (state: ICrypto, action: TCryptoActions) => ICrypto;

const mainReducer: TMainReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case actionTypes.GET_CRYPTO: {
      return {
        ...state,
        crypto: action.payload
      }
    }

    default: return state;
  }
}

export { mainReducer };