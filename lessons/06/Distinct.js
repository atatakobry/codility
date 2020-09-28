function solution(A) {
  if (!A.length) {
    return 0;
  }

  const B = A.sort((a, b) => a - b);
  let count = 1;

  for (let i = 0; i < B.length - 1; i++) {
    if (B[i] !== B[i + 1]) {
      count += 1;
    }
  }

  return count;
}
