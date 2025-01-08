import IndexRouter from './router/IndexRouter';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <IndexRouter></IndexRouter>
      </PersistGate>
    </Provider>
  );
}
export default App;
