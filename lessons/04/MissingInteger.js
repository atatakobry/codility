function solution(A) {
  const B = A.filter((a) => a > 0).sort((a, b) => a - b);

  if (!B.length || B[0] !== 1) {
    return 1;
  }

  for (let i = 0; i < B.length - 1; i++) {
    if (B[i + 1] - B[i] > 1) {
      return B[i] + 1;
    }
  }

  return B[B.length - 1] + 1;
}
