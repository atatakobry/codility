function solution(A, K) {
  if (!A.length) {
    return A;
  }

  let B = [...A];

  for (let i = 0; i < K; i++) {
    const last = B.pop();

    B = [last, ...B];
  }

  return B;
}
