function solution(A) {
  const B = A.sort((a, b) => a - b);

  for (let i = 0; i < B.length; i += 2) {
    if (B[i] !== B[i + 1]) {
      return B[i];
    }
  }
}
