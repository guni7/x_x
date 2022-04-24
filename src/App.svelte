<script lang="ts">
  import { onMount } from "svelte";
  import { TezosToolkit, MichelCodecPacker } from "@taquito/taquito";
  import { RpcClient } from "@taquito/rpc";
  import { Tzip16Module } from "@taquito/tzip16";
  import Header from "./components/Header/Header.svelte";
  import store from "./store";

  let Tezos: TezosToolkit;

  onMount(async () => {
    let rpcUrl = $store.settings[$store.network].rpcUrl;
    const rpcClient = new RpcClient(rpcUrl);
    // @ts-ignore
    Tezos = new TezosToolkit(rpcClient);
    Tezos.setPackerProvider(new MichelCodecPacker());
    //Tezos.addExtension(new Tzip16Module());
    store.updateTezos(Tezos);
    console.info(`Connected to ${rpcUrl}`);
    console.log($store);
  });
</script>

<main>
  <div class="flex items-center justify-end flex-wrap bg-yellow-200 p-6">
    <Header />
  </div>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>