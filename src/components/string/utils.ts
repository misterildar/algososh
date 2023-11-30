export const reverseStringFunction = (string: string) => {
  let start = 0;
  let end = string.length - 1;
  const arr = string.split('');

  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  return arr.join('');
};
