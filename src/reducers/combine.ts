import { combineReducers } from 'redux';
import { cardReducer, mainReducer, currentCryptoCardReducer } from '../reducers';

const rootReducer = combineReducers({
  main: mainReducer,
  card: cardReducer,
  current: currentCryptoCardReducer,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;