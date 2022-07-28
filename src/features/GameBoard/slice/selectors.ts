import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../store/types';
import { GameStatus, PathStep, Point } from '../types';
import { getPathPointListHelper } from '../helpers';

export const getSquareSize = (state: RootState): number =>
  state.gameBoard.squareSize;

export const getStartPathPoint = (state: RootState): Point | null =>
  state.gameBoard.startPathPoint;

export const getPathStepList = (state: RootState): PathStep[] | null =>
  state.gameBoard.pathStepList;

export const getPathPointList = createSelector(
  getStartPathPoint,
  getPathStepList,
  (startPathPoint, pathStepList): Point[] | null => {
    if (startPathPoint && pathStepList) {
      return getPathPointListHelper(startPathPoint, pathStepList);
    }
    return null;
  },
);

export const getCurrentStepPoint = (state: RootState): Point | null =>
  state.gameBoard.currentStepPoint;

export const getGameStatus = (state: RootState): GameStatus | null =>
  state.gameBoard.gameStatus;

export const getStepCount = (state: RootState): number =>
  state.gameBoard.stepCount;
