import { Stack } from './class-stack';
import { IparametersStack } from '../../types/types';
import { ElementStates } from '../../types/element-states';
import { delay } from '../../utils/delay';

export const addElement = (parameters: IparametersStack) => {
  const { valueInput, stack, setStack, setStackContainer, setValueInput } =
    parameters;
  setStack(stack);
  setStackContainer(stack.getStack);
  stack.push({ value: valueInput, color: ElementStates.Changing });
  setValueInput('');
  delay(500);
};

export const deletElement = () => {
  console.log('delet');
};

export const clearElements = () => {
  console.log('clear');
};
