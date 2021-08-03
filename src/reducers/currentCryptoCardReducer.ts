import { actionTypes, TCryptoActions } from "../types/types";
import { ICurrentCrypto } from "../types/interfaces";

const initialState: ICurrentCrypto = {
  wallet: [],
};

type TcurrentCryptoCardReducer = (state: ICurrentCrypto, action: TCryptoActions) => ICurrentCrypto;

const currentCryptoCardReducer: TcurrentCryptoCardReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case actionTypes.ADD_CRYPTO_TO_WALLET: {
      return {
        ...state,
        wallet: action.payload
      }
    }

    case actionTypes.DELETE_CRYPTO: {
      return {
        ...state,
        wallet: action.payload
      }
    }

    default: return state;
  }
}

export { currentCryptoCardReducer };