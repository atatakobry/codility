function solution(A) {
  if (A.length < 3) {
    return 0;
  }

  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      for (let l = j + 1; l < A.length; l++) {
        if (A[i] + A[j] > A[l] && A[j] + A[l] > A[i] && A[l] + A[i] > A[j]) {
          return 1;
        }
      }
    }
  }

  return 0;
}
