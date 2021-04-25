interface NPMpackagesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: NPMpackagesState, action: any): NPMpackagesState => {
  switch (action.type) {
    case 'search_npmpackages':
      return { loading: true, error: null, data: [] };
    case 'search_npmpackages_success':
      return { loading: false, error: null, data: action.payload };
    case 'search_npmpackages_error':
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
