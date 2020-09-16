function solution(A) {
  const differences = [];
  const sumB = [A[0]];
  const sumC = [A[A.length - 1]];

  // NOTE: it's faster than splice and sum each part
  for (let i = 1; i < A.length - 1; i++) {
    sumB.push(sumB[i - 1] + A[i]);
    sumC.push(sumC[i - 1] + A[A.length - i - 1]);
  }

  for (let i = 0; i < sumB.length; i++) {
    differences.push(Math.abs(sumB[i] - sumC[sumB.length - i - 1]));
  }

  return differences.sort((a, b) => a - b)[0];
}
