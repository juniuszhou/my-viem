import { WsProvider, ApiPromise } from "@polkadot/api";

async function main() {
  let WS_ENDPOINT="http://localhost:9944";

  const wsProvider = new WsProvider(WS_ENDPOINT);
  const api = new ApiPromise({ provider: wsProvider });
  
  
}

main();


