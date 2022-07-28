import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { getRoutePath } from '../../router';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.wrap}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to={getRoutePath('GameStart')}>Настройки игры</NavLink>
          </li>
          <li>
            <NavLink to={getRoutePath('About')}>О проекте</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
