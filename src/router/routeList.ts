import { FC } from 'react';
import { P404page } from '../pages/P404page';
import { AboutPage } from '../pages/AboutPage';
import { GameBoardPage } from '../pages/GameBoardPage';
import { GameStartPage } from '../pages/GameStartPage';

interface RouteItem {
  path: string;
  component: FC;
}

export const routeNameList = [
  'GameStart',
  'GameBoard',
  'About',
  'Page404',
] as const;

export type Routes = typeof routeNameList[number];

export const routeList: Record<Routes, RouteItem> = {
  GameStart: {
    path: '/',
    component: GameStartPage,
  },

  GameBoard: {
    path: 'game-board',
    component: GameBoardPage,
  },

  About: {
    path: '/about',
    component: AboutPage,
  },

  Page404: {
    path: '*',
    component: P404page,
  },
};
