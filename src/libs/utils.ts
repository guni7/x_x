import TokenAsset from "../components/TokenAsset";
import { AvailableToken, TezosAccountAddress, TokenBalanceInfo } from "../types";

export const fetchUserBalances = async (address: TezosAccountAddress): Promise<TokenBalanceInfo[] | null> => {
    try {
        const tokensWithBalanceReq = await fetch(
            `https://api.ithacanet.tzkt.io/v1/tokens/balances?account=${address}&balance.gt=1`
        );
        let map : any = {
            3754 : AvailableToken.BTCtz,
            3755 : AvailableToken.FLAME,
            3764 : AvailableToken.GIF,
            3759 : AvailableToken.wWETH,
            3760 : AvailableToken.GOT
        } ;
        if (tokensWithBalanceReq) {
            const tokensWithBalance = await tokensWithBalanceReq.json();
            const allTokens = tokensWithBalance.map((tokenData: any) => ({
                id: tokenData.id,
                address: tokenData.token.contract.address,
                balance: tokenData.balance,
                decimals: tokenData.token.metadata?.decimals ? tokenData.token.metadata?.decimals : 0,
                icon: tokenData.token.metadata?.icon ? tokenData.token.metadata?.icon : '',
                name: tokenData.token.metadata?.name ? tokenData.token.metadata?.name : map[tokenData.id],
                symbol: map[tokenData.id],
                type: tokenData.token.standard.toUpperCase(),
                isApproved: false
            }));
            console.log(allTokens.filter((tk: any) => tk.type === 'FA1.2'))
            return allTokens.filter((tk: any) => tk.type === 'FA1.2')
        } else {
            return null;
        }

    } catch(err) {
        console.log(err);
        return null;
    }
};