import { createSlice } from '@reduxjs/toolkit'
import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit } from '@taquito/taquito'
import { AvailableToken, TezosAccountAddress, TezosContractAddress, TokenContract, TokenBalanceInfo, TokenDistribution, UserProfile } from '../../types';


export type TezosState = {
    Tezos: TezosToolkit,
    contract: any,
    wallet: BeaconWallet | null,
    userAddress: TezosAccountAddress | undefined,
    userBalance: number,
    storage: any,
    beaconConnection: boolean,
    contractAddress: TezosContractAddress,
    publicToken: string,
    tokens: { [p in AvailableToken]: TokenContract } | undefined;
    tokenBalances: TokenBalanceInfo[],
    selectedToken: AvailableToken | null,
    selectedTokenDistribution: TokenDistribution | null,
    tokenDistribution: TokenDistribution[] | undefined;
    userProfile: UserProfile | null;
}
export const initialState: TezosState = {
    Tezos: new TezosToolkit("https://ithacanet.ecadinfra.com"),
    contract: undefined,
    wallet: null,
    userAddress: undefined,
    userBalance: 0,
    storage: null,
    beaconConnection: false,
    contractAddress: "KT1Uh6jFAA4t2Fgp3f3xXWxnjiNoVK9iTr2i",
    publicToken: "",
    tokens: undefined,
    tokenBalances: [],
    selectedToken: null,
    selectedTokenDistribution: null,
    tokenDistribution: undefined,
    userProfile: null,
}

const tezosSlice = createSlice({
    name: 'tezos',
    initialState: initialState,
    reducers: {
        setTezos: (state, action) => {
            state.Tezos = action.payload;
        },
        setContract: (state, action) => {
            state.contract = action.payload
        },
        setWallet: (state, action) => {
            state.wallet = action.payload
        },
        setUserAddress: (state, action) => {
            state.userAddress = action.payload
        },
        setUserBalance: (state, action) => {
            state.userBalance = action.payload
        },
        setStorage: (state, action) => {
            state.storage = action.payload
        },
        setBeaconConnection: (state, action) => {
            state.beaconConnection = action.payload
        },
        setPublicToken: (state, action) => {
            state.publicToken = action.payload
        },
        setTokens: (state, action) => {
            state.tokens = action.payload
        },
        setTokenBalances: (state, action) => {
            state.tokenBalances = action.payload
        },
        setSelectedToken: (state, action) => {
            state.selectedToken = action.payload
        },
        setSelectedTokenDistribution: (state, action) => {
            state.selectedTokenDistribution = action.payload
        },
        setTokenDistribution: (state, action) => {
            state.tokenDistribution = action.payload;
        },
        setUserProfile: (state, action) => {
            state.userProfile = action.payload;
        }
    }
});
export const {
    setTezos,
    setContract,
    setWallet,
    setUserAddress,
    setUserBalance,
    setStorage,
    setBeaconConnection,
    setPublicToken,
    setTokens,
    setTokenBalances,
    setSelectedToken,
    setSelectedTokenDistribution,
    setTokenDistribution,
    setUserProfile
} = tezosSlice.actions;

export default tezosSlice.reducer;
