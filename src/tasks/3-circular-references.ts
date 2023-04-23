console.log(JSON.stringify({ x: 5, y: 6 }));
// Expected output: "{"x":5,"y":6}"

try {
  const a = {};
  const b = a as any;
  b.ainner = a;

  console.log(JSON.stringify(b));
} catch (error) {
  // TypeError: Converting circular structure to JSON
  console.error(error);
}
