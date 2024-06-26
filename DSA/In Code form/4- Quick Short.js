function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(element => element < pivot);
  const middle = arr.filter(element => element === pivot);
  const right = arr.filter(element => element > pivot);

  return quickSort(left).concat(middle, quickSort(right));
}


quickSort([11, 40, 40, 50, 43, 10, 30, 42, 20, 6, 19, 32, 20, 41, 23, 27])

