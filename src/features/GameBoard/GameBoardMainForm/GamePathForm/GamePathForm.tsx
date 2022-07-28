import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { gameBoardSlice } from '../../slice';
import styles from './GamePathForm.module.scss';

export const GamePathForm: FC = () => {
  const dispatch = useAppDispatch();
  const pathStepList = useAppSelector(gameBoardSlice.selectors.getPathStepList);
  const pathPointList = useAppSelector(
    gameBoardSlice.selectors.getPathPointList,
  );

  const handlePathStepBtnClk = (index: number) => {
    if (!pathPointList) {
      return;
    }
    const currentStepPoint = pathPointList[index];
    if (currentStepPoint) {
      dispatch(gameBoardSlice.actions.setCurrentStepPoint(currentStepPoint));
    }
  };

  return (
    pathStepList && (
      <>
        <div className={styles.wrap}>
          {pathStepList.map((pathStep, index) => (
            <button
              key={index}
              className={styles.cell}
              onClick={() => handlePathStepBtnClk(index)}
            >
              {pathStep}
            </button>
          ))}
        </div>
        <div>
          *** для удобства проверки вы можете нажать на любую стрелку и на
          соответствующей клетки будет отображен символ {'"!"'} обозначающий
          конец движения в рамках данного шага (т.е. если например нажать на
          последнюю стрелку то можно будет увидеть окончание пути)
        </div>
      </>
    )
  );
};
