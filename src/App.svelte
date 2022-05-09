<script lang="ts">
  import { onMount } from "svelte";
  import { TezosToolkit, MichelCodecPacker } from "@taquito/taquito";
  import { RpcClient } from "@taquito/rpc";
  import { Tzip16Module } from "@taquito/tzip16";
  import Header from "./components/Header/Header.svelte";
  import store from "./store";
  import UserAssets from "./components/UserAssets/UserAssets.svelte";
  import TokenDistribution from './components/TokenDistribution/TokenDistribution.svelte';
  import { Router, Route, Link } from "svelte-navigator";

  import routes from "./routes";

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
  });
</script>

<Router>
  <main>
    <div class="flex items-center justify-end p-6">
      <Header />
    </div>
    <div class="h-screen bg-red-200">
      <Route path="/">
        <UserAssets />
      </Route>
    </div>
    <div class="h-screen bg-red-200">
      <Route path="/token">
        <TokenDistribution />
      </Route>
    </div>
  </main>
</Router>


<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
