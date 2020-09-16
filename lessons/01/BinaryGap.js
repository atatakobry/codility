function solution(N) {
  let M = N.toString(2);

  for (let i = M.length - 1; i > 0; i--) {
    if (M[i] === '0') {
      M = M.slice(0, -1);
    } else {
      break;
    }
  }

  const consecutiveZeros = M.split('1').sort((a, b) => b.length - a.length);

  return consecutiveZeros[0].length;
}
