export const selectionSortFn = (minMax: string, arr: number[]) => {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;

  const { length } = arr;

  for (let i = 0; i < length - 1; i++) {
    let maxInd = i;
    for (let j = i + 1; j < length; j++) {
      if (minMax === 'max' ? arr[maxInd] < arr[j] : arr[maxInd] > arr[j])
        maxInd = j;
    }

    let temp = arr[maxInd];
    arr[maxInd] = arr[i];
    arr[i] = temp;
  }

  return arr;
};

export const bubbleSortFn = (minMax: string, arr: number[]) => {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (minMax === 'max' ? arr[j] < arr[j + 1] : arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};
