import { Stack } from './class-stack';
import { delay } from '../../utils/delay';
import { IparametersStack } from '../../types/types';
import { ElementStates } from '../../types/element-states';

export const addElement = async (parameters: IparametersStack) => {
  const { valueInput, stack, setStackContainer, setValueInput } = parameters;

  stack.push({
    value: valueInput,
    color: ElementStates.Changing,
  });
  setStackContainer([...stack.getStack()]);
  setValueInput('');
  await delay(500);
  stack.peak()!.color = ElementStates.Default;
  setStackContainer([...stack.getStack()]);
};

export const deleteElement = async (parameters: IparametersStack) => {
  const { stack, setStackContainer } = parameters;
  stack.peak()!.color = ElementStates.Changing;
  setStackContainer([...stack.getStack()]);
  await delay(500);
  stack.pop();
  setStackContainer([...stack.getStack()]);
};

export const clearElements = (parameters: IparametersStack) => {
  const { stack, setStackContainer } = parameters;
  stack.clear();
  setStackContainer([]);
  setStackContainer([...stack.getStack()]);
};
