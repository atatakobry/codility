function solution(A) {
  let maxProduct = -Infinity;

  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      for (let l = j + 1; l < A.length; l++) {
        const product = A[i] * A[j] * A[l];

        if (product > maxProduct) {
          maxProduct = product;
        }
      }
    }
  }

  return maxProduct;
}
