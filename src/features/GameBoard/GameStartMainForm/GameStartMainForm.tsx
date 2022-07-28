import { FC, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getRoutePath } from '../../../router';
import { appSlice } from '../../../store/app';
import { gameBoardSlice } from '../slice';
import { PathStep, Point } from '../types';
import {
  getRandomPathStepListHelper,
  getRandomStartPathHelper,
} from '../helpers';
import {
  MAX_SQUARE_SIZE,
  MAX_STEP_COUNT,
  MIN_SQUARE_SIZE,
  MIN_STEP_COUNT,
} from '../const';
import styles from './GameStartMainForm.module.scss';

export const GameStartMainForm: FC = () => {
  const dispatch = useAppDispatch();
  const squareSize = useAppSelector(gameBoardSlice.selectors.getSquareSize);
  const stepCount = useAppSelector(gameBoardSlice.selectors.getStepCount);

  const handleSquareSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSquareSize = Number(e.target.value);
    dispatch(gameBoardSlice.actions.setSquareSize(newSquareSize));
  };

  const handleStepCountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newStepCount = Number(e.target.value);
    dispatch(gameBoardSlice.actions.setStepCount(newStepCount));
  };

  const handleGameStartBtnClk = () => {
    const startPathPoint: Point = getRandomStartPathHelper(squareSize);
    const pathStepList: PathStep[] = getRandomPathStepListHelper(
      squareSize,
      stepCount,
      startPathPoint,
    );

    dispatch(
      gameBoardSlice.actions.startNewGame({
        startPathPoint,
        pathStepList,
      }),
    );
    const gameBoardPagePath = getRoutePath('GameBoard');
    dispatch(appSlice.actions.redirect(gameBoardPagePath));
  };

  return (
    <div className={styles.wrap}>
      <div>
        размерность квадрата:{' '}
        <input
          type={'number'}
          value={squareSize}
          onChange={handleSquareSizeChange}
          max={MAX_SQUARE_SIZE}
          min={MIN_SQUARE_SIZE}
          className={styles.input}
        />
      </div>
      <div>
        Кол-во шагов:{' '}
        <input
          type={'number'}
          value={stepCount}
          onChange={handleStepCountChange}
          max={MAX_STEP_COUNT}
          min={MIN_STEP_COUNT}
          className={styles.input}
        />
      </div>
      <div>
        <button onClick={handleGameStartBtnClk} className={styles.startGameBtn}>
          Начать игру
        </button>
      </div>
    </div>
  );
};
