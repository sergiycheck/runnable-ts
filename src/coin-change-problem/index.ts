export function count(coins, n, sum) {
  console.log('coins', coins, 'n', n, 'sum', sum);

  if (sum == 0) return 1;

  if (sum < 0) return 0;

  if (n <= 0) return 0;

  return count(coins, n - 1, sum) + count(coins, n, sum - coins[n - 1]);
  // return count(coins, n - 1, sum);
  // return count(coins, n, sum - coins[n - 1]);
}
