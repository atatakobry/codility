function solution(A) {
  let minAverage = Infinity;
  let minIndex;

  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      const slice = A.slice(i, j + 1);
      const average = slice.reduce((sum, n) => (sum += n), 0) / slice.length;

      if (average < minAverage) {
        minAverage = average;
        minIndex = i;
      }
    }
  }

  return minIndex;
}
