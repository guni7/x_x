import type { TezosToolkit } from "@taquito/taquito";
import { bytes2Char } from "@taquito/utils";

export const fetchTezosDomain = async (
  Tezos: TezosToolkit,
  address: string
): Promise<string> => {
  try {
    const contract = await Tezos.wallet.at(
      "KT1GBZmSxmnKJXGMdMLbugPfLyUPmuLSMwKS"
    );
    const storage: any = await contract.storage();
    const user = await storage.store.reverse_records.get(address);
    if (user) {
      return bytes2Char(user.name);
    } else {
      return address.slice(0, 5) + "..." + address.slice(-5);
    }
  } catch (error) {
    console.error(
      "Failed to fetch Tezos domain contract or username with error:",
      error
    );
    return address.slice(0, 5) + "..." + address.slice(-5);
  }
};

//export const fetchUserBalances = async (favoriteTokens: AvailableToken[]) => {
//  const localStore = get(store);
//
//  const tokensWithBalanceReq = await fetch(
//    `https://api.tzkt.io/v1/tokens/balances?account=${localStore.userAddress}&balance.gt=1`
//  );
//  if (tokensWithBalanceReq) {
//    const tokensWithBalance = await tokensWithBalanceReq.json();
//    const availableTokenAddresses = Object.values(localStore.tokens).map(
//      (tk) => tk.address
//    );
//    let newBalances = {};
//    favoriteTokens.forEach((tk) => (newBalances[tk] = undefined));
//
//    tokensWithBalance
//      .filter((el) =>
//        availableTokenAddresses.includes(el.token.contract.address)
//      )
//      .map((el) => [
//        el.token.contract.address,
//        el.token.standard === "fa2" ? +el.token.tokenId : null,
//        +el.balance,
//      ])
//      .forEach(([tokenAddress, tokenId, tokenBalance]) => {
//        const token = Object.entries(localStore.tokens).find(([_, tokenInfo]) =>
//          tokenId
//            ? tokenInfo.address === tokenAddress &&
//              tokenInfo.tokenId === tokenId
//            : tokenInfo.address === tokenAddress
//        );
//        if (
//          token &&
//          (tokenBalance / 10 ** localStore.tokens[token[0]].decimals >
//            0.00001 ||
//            ["tzBTC", "BTCtz", "uBTC", "wWBTC"].includes(token[0]))
//        ) {
//          newBalances[token[0]] =
//            +tokenBalance / 10 ** localStore.tokens[token[0]].decimals;
//        }
//      });
//
//    return newBalances;
//  } else {
//    return null;
//  }
//};
