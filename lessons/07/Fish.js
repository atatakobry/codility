function solution(A, B) {
  if (A.length === 1) {
    return 1;
  }

  const upstreamFishes = [];
  const downstreamFishes = [];

  for (let i = 0; i < A.length; i++) {
    if (B[i] === 1) {
      const downstreamfish = [A[i], B[i]];

      // add downstream fish to chalenger's list
      downstreamFishes.push(downstreamfish);
    } else {
      const upstreamFish = [A[i], B[i]];

      // upstream fish vs downstream fishes! who's winner?
      for (let j = downstreamFishes.length - 1; j >= 0; j--) {
        const downstreamFish = downstreamFishes[j];

        if (upstreamFish[0] > downstreamFish[0]) {
          // downstream fish died
          // remove it from challenger's list
          downstreamFishes.pop();
        } else {
          // upstream fish died, no need to interate more
          break;
        }
      }

      // if upstream fish won and didn't die
      if (!downstreamFishes.length) {
        // add upstream fish to winner's list
        upstreamFishes.push(upstreamFish);
      }
    }
  }

  return upstreamFishes.length + downstreamFishes.length;
}
