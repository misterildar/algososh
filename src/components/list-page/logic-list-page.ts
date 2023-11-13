import { getRandomInt } from '../sorting-page/logic-sorting';
import { ElementStates } from '../../types/element-states';
// import { IstarterArray } from '../../types/types';

export const starterArray = Array.from({ length: 4 }, () => ({
  value: getRandomInt().toString(),
  color: ElementStates.Default,
}));
