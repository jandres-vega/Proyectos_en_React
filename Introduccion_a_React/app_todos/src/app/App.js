import React from 'react';
import { TodoProvider } from '../todoContext/index';
import AppUi from './AppUi'

const App = () => {
    
  return (
      <TodoProvider>
          <AppUi/>
      </TodoProvider>
  );
};

export default App;
