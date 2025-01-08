import { createStore, combineReducers } from 'redux';
import { CollapsedReducer } from './reducers/CollapsedReducer';
import { LoadingReducer } from './reducers/LoadingReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// 配置 redux-persist
const persistConfig = {
  key: 'heyue',
  storage,
};

// 创建根 reducer
const rootReducer = combineReducers({
  CollapsedReducer,
  LoadingReducer,
});

// 创建持久化的 reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 创建 store
const store = createStore(persistedReducer);

// 创建持久化 store
const persistor = persistStore(store);

export { store, persistor };
