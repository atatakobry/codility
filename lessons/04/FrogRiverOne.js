function solution(X, A) {
  const remainingLeaves = Array(X).fill(1);

  for (let i = 0, c = 0; i < A.length; i++) {
    if (remainingLeaves[A[i] - 1]) {
      remainingLeaves[A[i] - 1] = 0;
      c++;

      if (c === X) {
        return i;
      }
    }
  }

  return -1;
}
