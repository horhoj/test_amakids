import { random } from 'lodash';
import { PathStep, Point } from './types';

export const getRandomStartPathHelper = (squareSize: number): Point => {
  const x = random(0, squareSize - 1);
  const y = random(0, squareSize - 1);
  return { x, y };
};

export const getRandomPathStepListHelper = (
  squareSize: number,
  stepCount: number,
  startPoint: Point,
): PathStep[] => {
  const randomPathStepList: PathStep[] = [];

  let currentPoint: Point = startPoint;

  for (let i = 0; i < stepCount; i++) {
    const stepVariantList: PathStep[] = [];
    if (currentPoint.x > 0) {
      stepVariantList.push('left');
    }
    if (currentPoint.x < squareSize - 1) {
      stepVariantList.push('right');
    }
    if (currentPoint.y > 0) {
      stepVariantList.push('up');
    }
    if (currentPoint.y < squareSize - 1) {
      stepVariantList.push('down');
    }
    const currentStepIndex = random(0, stepVariantList.length - 1);
    const currentStep = stepVariantList[currentStepIndex];
    if (currentStep) {
      randomPathStepList.push(currentStep);
    }
    let { x, y } = currentPoint;
    if (currentStep === 'left') {
      x = x - 1;
    }
    if (currentStep === 'right') {
      x = x + 1;
    }
    if (currentStep === 'up') {
      y = y - 1;
    }
    if (currentStep === 'down') {
      y = y + 1;
    }
    currentPoint = { x, y };
  }

  return randomPathStepList;
};

export const getPathPointListHelper = (
  startPathPoint: Point,
  pathStepList: PathStep[],
): Point[] => {
  const pathPointList: Point[] = [];
  let currentPoint: Point = { ...startPathPoint };
  pathStepList.forEach((pathStep) => {
    let { x, y } = currentPoint;
    if (pathStep === 'left') {
      x = x - 1;
    }
    if (pathStep === 'right') {
      x = x + 1;
    }
    if (pathStep === 'up') {
      y = y - 1;
    }
    if (pathStep === 'down') {
      y = y + 1;
    }
    const newCurrentPoint: Point = { x, y };
    currentPoint = newCurrentPoint;

    pathPointList.push(newCurrentPoint);
  });

  return pathPointList;
};
