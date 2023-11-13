import { delay } from '../../utils/delay';
import { IvalueCircle } from '../../types/types';
import { IparametersQueune } from '../../types/types';
import { ElementStates } from '../../types/element-states';

export const emptyArray: IvalueCircle[] = Array.from({ length: 7 }, () => ({
  value: '',
  color: ElementStates.Default,
}));

export const addElement = async (parameters: IparametersQueune) => {
  const {
    queue,
    valueInput,
    queueContainer,
    setValueInput,
    setQueueContainer,
  } = parameters;

  queue.enqueue({
    value: valueInput,
    color: ElementStates.Changing,
  });
  queueContainer[queue.getTail()] = {
    value: '',
    color: ElementStates.Changing,
  };
  setQueueContainer([...queueContainer]);
  await delay(300);
  queueContainer[queue.getTail()] = {
    value: valueInput,
    color: ElementStates.Changing,
  };
  setQueueContainer([...queueContainer]);
  await delay(300);
  queueContainer[queue.getTail()] = {
    value: valueInput,
    color: ElementStates.Default,
  };
  setQueueContainer([...queueContainer]);
  setValueInput('');
};
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export const deleteElement = async (parameters: IparametersQueune) => {
  const { queue, queueContainer, setQueueContainer } = parameters;

  queue.dequeue();
  queueContainer[queue.getHead()] = {
    value: queueContainer[queue.getHead()].value,
    color: ElementStates.Changing,
  };
  setQueueContainer([...queueContainer]);

  await delay(300);
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
};

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export const clearElement = (parameters: IparametersQueune) => {
  const { queue, setQueueContainer } = parameters;

  queue.clear();
  setQueueContainer(
    Array.from({ length: 7 }, () => ({
      value: '',
      color: ElementStates.Default,
    }))
  );
};
