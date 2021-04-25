import { ActionType } from '../action-types';
import { Action } from '../actions';
interface NPMPackagesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: NPMPackagesState = initialState,
  action: Action
): NPMPackagesState => {
  switch (action.type) {
    case ActionType.SEARCH_NPM_PACKAGES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_NPM_PACKAGES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_NPM_PACKAGES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
