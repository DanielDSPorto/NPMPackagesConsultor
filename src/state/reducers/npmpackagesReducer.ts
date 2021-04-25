interface NPMPackagesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchNPMPackagesAction {
  type: 'search_npm_packages';
}
interface SearchNPMPackagesSuccessAction {
  type: 'search_npm_packages_success';
  payload: string[];
}
interface SearchNPMPackagesErrorAction {
  type: 'search_npm_packages_error';
  payload: string;
}

const reducer = (
  state: NPMPackagesState,
  action:
    | SearchNPMPackagesAction
    | SearchNPMPackagesSuccessAction
    | SearchNPMPackagesErrorAction
): NPMPackagesState => {
  switch (action.type) {
    case 'search_npm_packages':
      return { loading: true, error: null, data: [] };
    case 'search_npm_packages_success':
      return { loading: false, error: null, data: action.payload };
    case 'search_npm_packages_error':
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
