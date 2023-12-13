import { Alchemy, Network } from 'alchemy-sdk';


export async function fetchAllTransactions() {
  const config = {
    apiKey: 'z4Oz261kI857lWrKzOATuh3XccJ9F4-Z',
    network: Network.ETH_SEPOLIA,
  };

  const alchemy = new Alchemy(config);

  const data = await alchemy.core.getAssetTransfers({
    fromBlock: '0x0',
    fromAddress: '0x38BFF7b69e3ACa319Bd96A399beabb7c10abf6CB',
    category: ['external', 'internal', 'erc20', 'erc721', 'erc1155'],
  });

  console.log(JSON.stringify(data));

  return data;
}
