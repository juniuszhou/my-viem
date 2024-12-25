// 1. Import modules.
import { createPublicClient, http, createWalletClient } from 'viem';
import { mainnet } from 'viem/chains';

import {get_account} from './account';

// 2. Set up your client with desired chain & transport.
const client = createPublicClient({
  chain: mainnet,
  transport: http(),
});

// 3. Consume an action!
async function main() {
   
const client = createWalletClient({
  chain: mainnet,
  transport: http(
    'http://localhost:9944' // Connect to local HTTP server
  )
})

  const blockNumber = await client.getChainId();
  const account = get_account();
  console.log(blockNumber, account.address);
}
main();


