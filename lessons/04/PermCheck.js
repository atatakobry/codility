function solution(A) {
  const B = A.sort((a, b) => a - b);

  if (B[0] !== 1) {
    return 0;
  }

  for (let i = 0; i < B.length - 1; i++) {
    if (B[i + 1] - B[i] !== 1) {
      return 0;
    }
  }

  return 1;
}
