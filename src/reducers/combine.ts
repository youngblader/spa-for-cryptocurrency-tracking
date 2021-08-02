import { combineReducers } from 'redux';
import { cardReducer, mainReducer } from '../reducers';

const rootReducer = combineReducers({
  main: mainReducer,
  card: cardReducer
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;