import { Web3 } from "web3";

const rpcUrl = "https://eth-mainnet.g.alchemy.com/v2/z4Oz261kI857lWrKzOATuh3XccJ9F4-Z";

const etherscanApiKey = "23YSKX412APWMKEAPRP58NCKM2PH6219NQ";

const etherscanApiUrl = "https://api.etherscan.io/api";

const nftContractAddress = "0x38BFF7b69e3ACa319Bd96A399beabb7c10abf6CB";

export type RarityType = {
  id: number;
  firstId: number;
  title: string;
  rarity: number;
  hashRate?: number;
  totalMinted: number;
  remains: readonly number[];
};

const contractAbiUrl = `${etherscanApiUrl}?module=contract&action=getabi&address=${nftContractAddress}&apikey=${etherscanApiKey}`;

export async function initWeb3() {
  const contractResponse = await fetch(contractAbiUrl);
  const contractJson = (await contractResponse.json()) as string;
  const contractAbi = JSON.parse(contractJson.result);
  const web3 = new Web3(rpcUrl);

  return { web3, contractAbi };
}

export async function getIpfsLinkAndFetchResponseFromIt(web3: Web3, contractAbi: any, tokenId: number) {
  try {
    let contract = new web3.eth.Contract(contractAbi, nftContractAddress);
    const ipfsResponse = (await contract.methods.tokenURI(tokenId).call()) as string;
    if (!ipfsResponse) return;
    const ipfsValidLink = ipfsResponse.replace("ipfs://", "https://ipfs.io/ipfs/");

    console.log("ipfsValidLink", ipfsValidLink);

    const nftDataResponse = (await fetchWithTimeout(ipfsValidLink, { timeout: 2000 })) as Response;

    return nftDataResponse;
  } catch (error) {
    console.error(error);
  }
}

async function fetchWithTimeout(resource: string, options: any) {
  const { timeout } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
}
