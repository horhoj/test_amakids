import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { gameBoardSlice } from '../slice';
import { getRoutePath } from '../../../router';
import { appSlice } from '../../../store/app';
import styles from './GameBoardMainForm.module.scss';
import { GameBoardForm } from './GameBoardForm';
import { GamePathForm } from './GamePathForm';
import { GameStatusForm } from './GameStatusForm';

export const GameBoardMainForm: FC = () => {
  const gameStatus = useAppSelector(gameBoardSlice.selectors.getGameStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (gameStatus === null) {
      const path = getRoutePath('GameStart');
      dispatch(appSlice.actions.redirect(path));
    }
  }, [gameStatus]);

  useEffect(
    () => () => {
      dispatch(gameBoardSlice.actions.clear());
    },
    [],
  );

  return (
    <div className={styles.wrap}>
      <GameStatusForm />
      <GameBoardForm />
      <GamePathForm />
    </div>
  );
};
