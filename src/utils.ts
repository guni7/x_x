import type { TezosToolkit } from "@taquito/taquito";
import { bytes2Char } from "@taquito/utils";
import type { AvailableToken, TezosAccountAddress, TokenBalanceInfo } from "./types";

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

export const fetchUserBalances = async (address: TezosAccountAddress): Promise<TokenBalanceInfo[]> => {
  //const localStore = get(store);

  console.log(address);
  const tokensWithBalanceReq = await fetch(
    `https://api.tzkt.io/v1/tokens/balances?account=${address}&balance.gt=1`
  );
  if (tokensWithBalanceReq) {
    const tokensWithBalance = await tokensWithBalanceReq.json();
    console.log(tokensWithBalance);
    return tokensWithBalance.map((tokenData) => ({
      id: tokenData.id,
      balance: tokenData.balance,
      decimals: tokenData.token.metadata.decimals,
      icon: tokenData.token.metadata.icon,
      name: tokenData.token.metadata.name,
      symbol: tokenData.token.metadata.symbol,
      type: tokenData.token.standard.toUpperCase()
    }));
  } else {
    return null;
  }
};
