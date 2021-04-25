import { Provider } from 'react-redux';
import { store } from '../state';
import NPMPackagesList from './NPMPackagesList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a Package</h1>
        <NPMPackagesList />
      </div>
    </Provider>
  );
};

export default App;
