import { configureStore } from '@reduxjs/toolkit';
import { gameBoardSlice } from '../features/GameBoard/slice';
import { appSlice } from './app';

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appSlice.reducer,
    gameBoard: gameBoardSlice.reducer,
  },
});
