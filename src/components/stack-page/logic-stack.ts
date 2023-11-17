import { Stack } from './class-stack';
import { delay } from '../../utils/delay';
import { IparametersStack } from '../../types/types';
import { ElementStates } from '../../types/element-states';
import { SHORT_DELAY_IN_MS } from '../../constants/delays';

export const addElement = async (parameters: IparametersStack) => {
  const {
    valueInput,
    stack,
    setStackContainer,
    setValueInput,
    setIsDisabled,
    isDisabled,
  } = parameters;
  setIsDisabled({ ...isDisabled, addButton: true });
  stack.push({
    value: valueInput,
    color: ElementStates.Changing,
  });
  setStackContainer([...stack.getStack()]);
  setValueInput('');
  await delay(SHORT_DELAY_IN_MS);
  stack.peak()!.color = ElementStates.Default;
  setStackContainer([...stack.getStack()]);
  setIsDisabled({ ...isDisabled, addButton: false });
};

export const deleteElement = async (parameters: IparametersStack) => {
  const { stack, setStackContainer, setIsDisabled, isDisabled } = parameters;
  setIsDisabled({ ...isDisabled, deleteButton: true });
  stack.peak()!.color = ElementStates.Changing;
  setStackContainer([...stack.getStack()]);
  await delay(SHORT_DELAY_IN_MS);
  stack.pop();
  setStackContainer([...stack.getStack()]);
  setIsDisabled({ ...isDisabled, deleteButton: false });
};

export const clearElements = (parameters: IparametersStack) => {
  const { stack, setStackContainer, setIsDisabled, isDisabled } = parameters;
  setIsDisabled({ ...isDisabled, clearButton: true });
  stack.clear();
  setStackContainer([]);
  setStackContainer([...stack.getStack()]);
  setIsDisabled({ ...isDisabled, clearButton: false });
};
