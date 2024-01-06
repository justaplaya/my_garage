import { rootReducer } from './index';
import { AuthState } from '../Pages/auth/reducer/types';
import { SharedState } from './shared/types';

export type RootState = ReturnType<typeof rootReducer>;
export type CombinedReducers = { shared: SharedState; auth: AuthState };
