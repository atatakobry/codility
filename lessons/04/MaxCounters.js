function solution(N, A) {
  const counters = Array(N).fill(0);
  let max = 0;

  for (let i = 0; i < A.length; i++) {
    if (1 <= A[i] && A[i] <= N) {
      counters[A[i] - 1] += 1;

      if (counters[A[i] - 1] > max) {
        max = counters[A[i] - 1];
      }
    } else {
      // NOTE: it's faster than Array.fill
      for (let j = 0; j < counters.length; j++) {
        counters[j] = max;
      }
    }
  }

  return counters;
}
