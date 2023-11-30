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
  let queueArray = queueContainer;
  queueArray[queue.getTail()] = {
    value: '',
    color: ElementStates.Changing,
  };
  setValueInput('');
  setQueueContainer([...queueArray]);
  await delay(SHORT_DELAY_IN_MS);
  queueArray = queueContainer;
  queueArray[queue.getTail()] = {
    value: valueInput,
    color: ElementStates.Changing,
  };
  setQueueContainer([...queueArray]);
  await delay(SHORT_DELAY_IN_MS);
  queueArray = queueContainer;
  queueArray[queue.getTail()] = {
    value: valueInput,
    color: ElementStates.Default,
  };
  setQueueContainer([...queueArray]);
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
  let queueArray = queueContainer;
  queueArray[queue.getHead()] = {
    value: queueContainer[queue.getHead()].value,
    color: ElementStates.Changing,
  };
  setQueueContainer([...queueArray]);

  await delay(SHORT_DELAY_IN_MS);
  queueArray = queueContainer;
  queueArray[queue.getHead()] = {
    value: '',
    color: ElementStates.Default,
  };

  if (queue.end()) {
    queueArray[queue.getHead()] = {
      value: '',
      color: ElementStates.Default,
      head: 'head',
    };
  }
  setQueueContainer([...queueArray]);
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
