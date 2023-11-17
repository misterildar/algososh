import { delay } from '../../utils/delay';
import { IvalueCircle } from '../../types/types';
import { IparametersQueune } from '../../types/types';
import { ElementStates } from '../../types/element-states';
import { CLASS_QUENE_MAX } from '../../constants/constans';
import { SHORT_DELAY_IN_MS } from '../../constants/delays';

export const emptyArray: IvalueCircle[] = Array.from(
  { length: CLASS_QUENE_MAX },
  () => ({
    value: '',
    color: ElementStates.Default,
  })
);

export const addElement = async (parameters: IparametersQueune) => {
  const {
    queue,
    isDisabled,
    valueInput,
    queueContainer,
    setValueInput,
    setIsDisabled,
    setQueueContainer,
  } = parameters;

  setIsDisabled({ ...isDisabled, deleteButton: true, clearButton: true });
  queue.enqueue({
    value: valueInput,
    color: ElementStates.Changing,
  });
  queueContainer[queue.getTail()] = {
    value: '',
    color: ElementStates.Changing,
  };
  setValueInput('');
  setQueueContainer([...queueContainer]);
  await delay(SHORT_DELAY_IN_MS);
  queueContainer[queue.getTail()] = {
    value: valueInput,
    color: ElementStates.Changing,
  };
  setQueueContainer([...queueContainer]);
  await delay(SHORT_DELAY_IN_MS);
  queueContainer[queue.getTail()] = {
    value: valueInput,
    color: ElementStates.Default,
  };
  setQueueContainer([...queueContainer]);
  setIsDisabled({ ...isDisabled, deleteButton: false, clearButton: false });
};
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

export const deleteElement = async (parameters: IparametersQueune) => {
  const {
    queue,
    queueContainer,
    setQueueContainer,
    isDisabled,
    setIsDisabled,
  } = parameters;

  setIsDisabled({ ...isDisabled, addButton: true, clearButton: true });
  queue.dequeue();
  queueContainer[queue.getHead()] = {
    value: queueContainer[queue.getHead()].value,
    color: ElementStates.Changing,
  };
  setQueueContainer([...queueContainer]);

  await delay(SHORT_DELAY_IN_MS);
  queueContainer[queue.getHead()] = {
    value: '',
    color: ElementStates.Default,
  };

  if (queue.end()) {
    queueContainer[queue.getHead()] = {
      value: '',
      color: ElementStates.Default,
      head: 'head',
    };
  }
  setQueueContainer([...queueContainer]);
  setIsDisabled({ ...isDisabled, addButton: false, clearButton: false });
};

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

export const clearElement = (parameters: IparametersQueune) => {
  const { queue, setQueueContainer, isDisabled, setIsDisabled } = parameters;

  setIsDisabled({ ...isDisabled, deleteButton: true, addButton: true });
  queue.clear();
  setQueueContainer(
    Array.from({ length: CLASS_QUENE_MAX }, () => ({
      value: '',
      color: ElementStates.Default,
    }))
  );
  setIsDisabled({ ...isDisabled, deleteButton: false, addButton: false });
};
