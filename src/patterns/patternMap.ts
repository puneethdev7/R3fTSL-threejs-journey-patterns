import * as rgb from './implementations/rgb';
import * as xyGradient from './implementations/xyGradient';
import * as lines from './implementations/lines';
import * as particle from './implementations/particle';
import * as grid from './implementations/grid';
import * as angle from './implementations/angle';
import * as noise from './implementations/noise';

export const patternMap = {
  ...rgb,
  ...xyGradient,
  ...lines,
  ...particle,
  ...grid,
  ...angle,
  ...noise
};
