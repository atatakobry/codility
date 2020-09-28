function solution(A) {
  let count = 0;

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === 0) {
      for (let j = i + 1; j < A.length; j++) {
        if (A[j] === 1) {
          count += 1;

          if (count > 1000000000) {
            return -1;
          }
        }
      }
    }
  }

  return count;
}
