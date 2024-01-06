import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { RootState, CombinedReducers } from './types';
import { rootPersistConfig } from './config';
import { authSlice } from '../Pages/auth/reducer';
import { sharedSlice } from './shared';

export const rootReducer = combineReducers<CombinedReducers>({
  shared: sharedSlice.reducer,
  auth: authSlice.reducer,
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
