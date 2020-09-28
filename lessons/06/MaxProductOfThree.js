const getMaxProduct = (A) => {
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
};

function solution(A) {
  if (A.length <= 6) {
    return getMaxProduct(A);
  }

  const B = A.sort((a, b) => a - b);
  const C = [].concat(B.slice(0, 3), B.slice(-3));

  return getMaxProduct(C);
}
