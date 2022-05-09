<script lang="ts">
  import type { TokenBalanceInfo } from "../../types";

  export let tokenBalanceInfo: TokenBalanceInfo;
</script>

<div
  class="flex-col max-w-xs p-8 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl"
>
  <div class="flex justify-end">
    <span
      class="align-bottom rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs"
    >
      {tokenBalanceInfo.type}
    </span>
  </div>
  <div class="mt-4 text-gray-500 sm:pr-8">
    <img
      class="w-25 h-25"
      src={"images/" + tokenBalanceInfo.symbol + ".png"}
      alt="token icon"
    />
    <h5 class="mt-4 text-xl font-bold text-gray-900">
      {Number(tokenBalanceInfo.balance) /
        10 ** Number(tokenBalanceInfo.decimals)}
      <span class="fonn">{tokenBalanceInfo.symbol}</span>
    </h5>

    <p class="hidden mt-2 text-sm sm:block">
      {tokenBalanceInfo.name}
    </p>
  </div>
  <button> </button>

</div>
