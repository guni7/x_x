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
    Tezos = new TezosToolkit(rpcClient);
    Tezos.setPackerProvider(new MichelCodecPacker());
    //Tezos.addExtension(new Tzip16Module());
    store.updateTezos(Tezos);
    console.info(`Connected to ${rpcUrl}`);
    console.log($store);
  });
</script>

<main>
  <div>
    <Header />
  </div>
</main>
