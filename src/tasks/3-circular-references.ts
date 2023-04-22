try {
  const a = {};
  const b = a as any;
  b.a = a;

  console.log(JSON.stringify(b));
} catch (error) {
  console.error(error);
}
