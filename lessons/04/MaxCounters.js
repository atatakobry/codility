function solution(N, A) {
  const counters = Array(N).fill(0);
  let maxCounterToSet = 0;
  let totallyMaxCounter = 0;

  for (let i = 0; i < A.length; i++) {
    if (1 <= A[i] && A[i] <= N) {
      const index = A[i] - 1;

      // "if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X)"
      // also consider `maxCounterToSet` due to
      // "if A[K] = N + 1 then operation K is max counter"
      counters[index] = Math.max(counters[index], maxCounterToSet) + 1;

      // find the newest totally max counter
      if (counters[index] > totallyMaxCounter) {
        totallyMaxCounter = counters[index];
      }
    } else if (A[i] === N + 1) {
      // update `maxCounterToSet`
      maxCounterToSet = totallyMaxCounter;
    }
  }

  // set all "untouched" remaining counters to `maxCounterToSet`
  for (let j = 0; j < counters.length; j++) {
    if (counters[j] < maxCounterToSet) {
      counters[j] = maxCounterToSet;
    }
  }

  return counters;
}
