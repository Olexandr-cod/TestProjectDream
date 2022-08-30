import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import store from './src/store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
