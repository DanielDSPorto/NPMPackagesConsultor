import { combineReducers } from 'redux';
import npmPackagesReducer from './npmpackagesReducer';

const reducers = combineReducers({
  npmPackages: npmPackagesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
