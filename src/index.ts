function g() {
  let c = 0;
  const i = () => c++;
  const m = `c ${c}`;
  const gm = () => {
    return m;
  };
  return { i, gm };
}

const { i, gm } = g();

i();
i();

console.log(gm());
