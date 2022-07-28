import { FC } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { gameBoardSlice } from '../../slice';
import { PathStep, Point } from '../../types';
import {
  getRandomPathStepListHelper,
  getRandomStartPathHelper,
} from '../../helpers';
import styles from './GameStatusForm.module.scss';

export const GameStatusForm: FC = () => {
  const gameStatus = useAppSelector(gameBoardSlice.selectors.getGameStatus);
  const dispatch = useAppDispatch();
  const squareSize = useAppSelector(gameBoardSlice.selectors.getSquareSize);
  const stepCount = useAppSelector(gameBoardSlice.selectors.getStepCount);

  const handleGameRepeatBtnClk = () => {
    dispatch(gameBoardSlice.actions.clear());
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
  };

  return (
    <div className={styles.wrap}>
      {gameStatus === 'inProgress' && (
        <div className={styles.status}>Кликните клетку конца пути</div>
      )}
      {gameStatus === 'win' && (
        <div className={classNames(styles.status, styles.win)}>
          Вы верно ответили!
        </div>
      )}
      {gameStatus === 'lose' && (
        <div className={classNames(styles.status, styles.lose)}>
          Вы ошиблись!
        </div>
      )}
      {(gameStatus === 'win' || gameStatus === 'lose') && (
        <button onClick={handleGameRepeatBtnClk} className={styles.repeatBtn}>
          повторить?
        </button>
      )}
    </div>
  );
};
