function solution(S, P, Q) {
  const nucleotides = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };
  const A = [...S].map((i) => nucleotides[i]);
  const result = [];

  for (let i = 0; i < P.length; i++) {
    const part = A.slice(P[i], Q[i] + 1);

    result.push(Math.min(...part));
  }

  return result;
}
