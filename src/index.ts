function g() {
  let c = 0;

  const i = () => c++;

  const gm = () => {
    const m = `c ${c}`;
    return m;
  };
  return { i, gm };
}

const { i, gm } = g();

i();

console.log(gm());
