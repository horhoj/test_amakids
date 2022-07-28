export type GameStatus = 'inProgress' | 'win' | 'lose';

export const pathStepTypeList = ['up', 'right', 'down', 'left'] as const;

export type PathStep = typeof pathStepTypeList[number];

export interface Point {
  x: number;
  y: number;
}
