import { FC } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { gameBoardSlice } from '../../slice';
import { Point } from '../../types';
import styles from './GameBoardForm.module.scss';

export const GameBoardForm: FC = () => {
  const dispatch = useAppDispatch();
  const squareSize = useAppSelector(gameBoardSlice.selectors.getSquareSize);
  const startPathPoint = useAppSelector(
    gameBoardSlice.selectors.getStartPathPoint,
  );
  const currentStepPoint = useAppSelector(
    gameBoardSlice.selectors.getCurrentStepPoint,
  );
  const pathPointList = useAppSelector(
    gameBoardSlice.selectors.getPathPointList,
  );
  const gameStatus = useAppSelector(gameBoardSlice.selectors.getGameStatus);
  const pathLastPoint = pathPointList
    ? pathPointList[pathPointList.length - 1]
    : null;

  const handleCellClk = (point: Point) => {
    if (pathLastPoint && gameStatus === 'inProgress') {
      if (pathLastPoint.x === point.x && pathLastPoint.y === point.y) {
        dispatch(gameBoardSlice.actions.setGameStatus('win'));
        return;
      }
      dispatch(gameBoardSlice.actions.setGameStatus('lose'));
    }
  };

  const xList = Array(squareSize).fill(null);
  const yList = Array(squareSize).fill(null);

  return (
    <div
      className={styles.wrap}
      style={{
        gridTemplateColumns: `repeat(${squareSize}, 1fr)`,
        gridTemplateRows: `repeat(${squareSize}, 1fr)`,
      }}
    >
      {yList.map((_, yIndex) =>
        xList.map((_, xIndex) => (
          <button
            key={xIndex}
            className={classNames(
              styles.cell,
              gameStatus === 'win' &&
                pathLastPoint &&
                pathLastPoint.y === yIndex &&
                pathLastPoint.x === xIndex &&
                styles.cellWin,
              gameStatus === 'lose' &&
                pathLastPoint &&
                pathLastPoint.y === yIndex &&
                pathLastPoint.x === xIndex &&
                styles.cellLose,
            )}
            onClick={() => handleCellClk({ x: xIndex, y: yIndex })}
          >
            {startPathPoint &&
              startPathPoint.y === yIndex &&
              startPathPoint.x === xIndex &&
              'S'}{' '}
            {currentStepPoint &&
              currentStepPoint.y === yIndex &&
              currentStepPoint.x === xIndex &&
              '!'}
          </button>
        )),
      )}
    </div>
  );
};
