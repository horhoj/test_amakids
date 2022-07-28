import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameStatus, PathStep, Point } from '../types';
import { MIN_SQUARE_SIZE, MIN_STEP_COUNT } from '../const';
import { SLICE_NAME } from './types';

interface InitialState {
  squareSize: number;
  stepCount: number;
  gameStatus: GameStatus | null;
  pathStepList: PathStep[] | null;
  startPathPoint: Point | null;
  currentStepPoint: Point | null;
}

const initialState: InitialState = {
  squareSize: MIN_SQUARE_SIZE,
  stepCount: MIN_STEP_COUNT,
  gameStatus: null,
  pathStepList: null,
  startPathPoint: null,
  currentStepPoint: null,
};

interface StartNewGamePayload {
  startPathPoint: Point;
  pathStepList: PathStep[];
}

export const { actions, reducer } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    startNewGame: (state, action: PayloadAction<StartNewGamePayload>) => {
      state.startPathPoint = action.payload.startPathPoint;
      state.pathStepList = action.payload.pathStepList;
      state.gameStatus = 'inProgress';
    },
    setCurrentStepPoint: (state, action: PayloadAction<Point | null>) => {
      state.currentStepPoint = action.payload;
    },
    setSquareSize: (state, action: PayloadAction<number>) => {
      state.squareSize = action.payload;
    },
    setStepCount: (state, actions: PayloadAction<number>) => {
      state.stepCount = actions.payload;
    },
    setGameStatus: (state, action: PayloadAction<GameStatus | null>) => {
      state.gameStatus = action.payload;
    },
    clear: (state) => {
      state.gameStatus = null;
      state.pathStepList = null;
      state.startPathPoint = null;
      state.currentStepPoint = null;
    },
  },
});
