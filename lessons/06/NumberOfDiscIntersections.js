function solution(A) {
  let count = 0;

  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      // if distance between centers of two circles <= sum of their radiuses
      if (j - i <= A[i] + A[j]) {
        count += 1;

        if (count > 10000000) {
          return -1;
        }
      }
    }
  }

  return count;
}
