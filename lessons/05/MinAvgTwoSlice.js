function solution(A) {
  let minAverage = Infinity;
  let minIndex;

  for (let i = 0; i < A.length - 1; i++) {
    let sum = A[i];

    for (let j = i + 1; j < A.length; j++) {
      sum += A[j];

      const average = sum / (j - i + 1);

      if (average < minAverage) {
        minAverage = average;
        minIndex = i;
      }
    }
  }

  return minIndex;
}
