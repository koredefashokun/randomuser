export const range = (n) => {
  let i = 0;
  let a = new Array(n);

  while (i < n) {
    a[i++] = i;
  }

  return a;
};
