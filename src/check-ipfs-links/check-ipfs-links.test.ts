import { describe, it, expect } from 'vitest';
import {
  RarityType,
  getIpfsLinkAndFetchResponseFromIt,
  initWeb3,
} from './check-ipfs-links';
import data from './nft-json.json';

const nftsDataArr = data as readonly RarityType[];

describe('check-ipfs-links', async () => {
  const { web3, contractAbi } = await initWeb3();

  for (const nftData of nftsDataArr) {
    it(`should have valid ipfs link for ${nftData.title}`, async () => {
      // const response = await getIpfsLinkAndFetchResponseFromIt(web3, contractAbi, nftData.firstId);
      // expect(response).toBeDefined();
      // expect(response.status).toBe(200);
    });
  }
});
