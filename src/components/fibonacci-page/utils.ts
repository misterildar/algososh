export const getFibonacciNumbers = (valueInput: string) => {
  const arr: number[] = [1, 1];

  for (let i = 2; i <= Number(valueInput) + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
};
