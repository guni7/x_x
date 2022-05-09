<script lang="ts">
  import { prevent_default } from "svelte/internal";

  import type {
    TezosAccountAddress,
    TokenBalanceInfo,
    TokenDistribution,
  } from "../../types";
  import store from "./../../store";
  import Beneficiary from "./Beneficiary.svelte";

  let userAddress;
  let token: TokenBalanceInfo;
  let tokenBalance;
  let beneficiaries = [];

  let handleChange = (e) => {
    console.log(e.detail);
    beneficiaries[e.detail.id] = e.detail;
  };

  let addBeneficiary = () => {
    let beneficiaryPercentage = {
      id: beneficiaries.length,
      percentage: 100 / (beneficiaries.length + 1),
    };
    beneficiaries = [...beneficiaries, beneficiaryPercentage];
    beneficiaries = beneficiaries.map((p) => {
      return {
        ...p,
        percentage: beneficiaryPercentage.percentage,
      };
    });
    console.log(beneficiaries);
  };
</script>

<div class="flex flex-col">
  <button on:click={addBeneficiary}>Add Beneficiary</button>
  <div>
    {#each beneficiaries as b}
      <div class="flex flex-coli bg-yellow-200 w-1/3 mt-2 ml-2">
        <Beneficiary on:change={handleChange} {beneficiaries} id={b.id} />
      </div>
    {/each}
  </div>
</div>
