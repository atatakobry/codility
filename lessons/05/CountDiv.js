function solution(A, B, K) {
  if (B === 0) {
    return 1;
  }

  if (K === 1) {
    return B - A + 1;
  }

  for (let i = A, c = 0; i <= B; i++) {
    if (i % K === 0) {
      for (let j = i; j <= B; j += K) {
        c += 1;
      }

      return c;
    }
  }

  return 0;
}
