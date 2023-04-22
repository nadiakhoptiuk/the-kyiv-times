import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from './postsApi';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      thunk: {
        extraArgument: postsApi,
      },
    }),
    postsApi.middleware,
  ],
});

setupListeners(store.dispatch);
