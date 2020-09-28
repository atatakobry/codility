const brackets = {
  opened: '{[(',
  closed: ')]}',
  '{': { opened: '{', closed: '}' },
  '[': { opened: '[', closed: ']' },
  '(': { opened: '(', closed: ')' },
};

function solution(S) {
  if (!S.length) {
    return 1;
  }

  if (
    brackets.closed.includes(S[0]) ||
    brackets.opened.includes(S[S.length - 1])
  ) {
    return 0;
  }

  const stack = [];

  for (let i = 0; i < S.length; i++) {
    if (brackets.opened.includes(S[i])) {
      stack.push(S[i]);
    } else {
      if (!stack.length) {
        return 0;
      }

      const bracketType = stack[stack.length - 1];

      if (S[i] === brackets[bracketType].closed) {
        stack.pop();
      } else {
        return 0;
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}
