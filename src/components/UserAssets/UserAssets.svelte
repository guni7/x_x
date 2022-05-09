<script lang="ts">
  import { fetchUserBalances } from "../../utils";
  import type { TezosAccountAddress, TokenBalanceInfo } from "../../types";
  import store from "./../../store";
  import { onMount } from "svelte";
  import TokenAsset from "./TokenAsset.svelte";

  let userAddress;
  let balances: TokenBalanceInfo[] = [];
  $: {
    userAddress = $store.userAddress;
    if (userAddress) {
      const userAssetBalances = fetchUserBalances(userAddress)
        .then((data) => {
          balances = data;
          //store.updateTokensBalances(balances);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(userAssetBalances);
    }
  }
</script>

<div class="flex justify-self-center justify-center align-self-middle align-middle ">
  <div>
    {#each balances as balance}
      <TokenAsset tokenBalanceInfo={balance} />
    {/each}
  </div>
  <div>
  <div class="shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
    <div class="">
    <span class="rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
      FA1.2
    </span>
  </div>
    <div class=" text-gray-500">
      <img
        src="images/PLENTY.png"
        alt="token icon"
      >
      <h5 class="">{Number($store.xtzData.balance)/(10**6)} <span class="font-normal">XTZ</span></h5>
      
      <p class="">
        Tezos
      </p>
    </div>
</div>
</div>

</div>
