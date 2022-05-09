<script>
  import Slider from "@bulatdashiev/svelte-slider";
  import { createEventDispatcher } from "svelte";
  export let id;
  export let beneficiaries;
  $: value = [beneficiaries[id].percentage];

  const dispatch = createEventDispatcher();

  let changeValue = (e) => {
    dispatch("change", { id, percentage: e.detail[0] });
  };
</script>

<div class="m-2">
  Percentage {value}
  {beneficiaries}
  <Slider bind:value on:input={(e) => changeValue(e)} />
</div>
