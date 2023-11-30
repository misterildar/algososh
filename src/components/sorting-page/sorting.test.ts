import { selectionSortFn, bubbleSortFn } from './utils';

describe('Тестирование алгоритмов сортировки выбором и пузырьком', () => {
  it('Корректно сортирует пустой массив', () => {
    expect(selectionSortFn('min', [])).toEqual([]);
    expect(selectionSortFn('max', [])).toEqual([]);
    expect(bubbleSortFn('min', [])).toEqual([]);
    expect(bubbleSortFn('max', [])).toEqual([]);
  });

  it('Корректно сортирует массив из одного элемента', () => {
    expect(selectionSortFn('min', [1])).toEqual([1]);
    expect(selectionSortFn('max', [1])).toEqual([1]);
    expect(bubbleSortFn('min', [1])).toEqual([1]);
    expect(bubbleSortFn('max', [1])).toEqual([1]);
  });

  it('Корректно сортирует массив из нескольких элементов', () => {
    expect(selectionSortFn('min', [4, 2, 5, 1, 3])).toEqual([1, 2, 3, 4, 5]);

    expect(selectionSortFn('max', [4, 2, 5, 1, 3])).toEqual([5, 4, 3, 2, 1]);

    expect(bubbleSortFn('min', [4, 2, 5, 1, 3])).toEqual([1, 2, 3, 4, 5]);

    expect(bubbleSortFn('max', [4, 2, 5, 1, 3])).toEqual([5, 4, 3, 2, 1]);
  });

  it('проверка на ошибки', () => {
    expect(selectionSortFn('min', [4, 2, 5, 1, 3])).not.toEqual([
      5, 4, 3, 2, 1,
    ]);

    expect(selectionSortFn('min', [4, 12, 5, 1, 13])).not.toEqual([
      1, 12, 13, 4, 5,
    ]);

    expect(selectionSortFn('max', [4, 12, 5, 1, 13])).not.toEqual([
      5, 4, 13, 12, 1,
    ]);

    expect(selectionSortFn('max', [4, 2, 5, 1, 3])).not.toEqual([5]);

    expect(bubbleSortFn('min', [4, 2, 5, 1, 3])).not.toEqual([5, 4, 3, 2, 1]);

    expect(bubbleSortFn('min', [4, 12, 5, 1, 13])).not.toEqual([
      1, 12, 13, 4, 5,
    ]);

    expect(bubbleSortFn('max', [4, 12, 5, 1, 13])).not.toEqual([
      5, 4, 13, 12, 1,
    ]);

    expect(bubbleSortFn('max', [4, 2, 5, 1, 3])).not.toEqual([5]);
  });
});
