<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import store from "../../store";
  import { BeaconWallet } from "@taquito/beacon-wallet";
  import type { TezosAccountAddress } from "../../types";
  //import { AvailableFiat } from "../../types";
  import {
    NetworkType,
    BeaconEvent,
    defaultEventCallbacks,
  } from "@airgap/beacon-sdk";
  import { fetchTezosDomain } from "../../utils";

  const walletOptions = {
    name: "x_x",
    preferredNetwork:
      $store.network === "mainnet"
        ? NetworkType.MAINNET
        : NetworkType.FLORENCENET,
    disableDefaultEvents: true, // Disable all events / UI. This also disables the pairing alert.
    eventHandlers: {
      // To keep the pairing alert, we have to add the following default event handlers back
      [BeaconEvent.PAIR_INIT]: {
        handler: defaultEventCallbacks.PAIR_INIT,
      },
      [BeaconEvent.PAIR_SUCCESS]: {
        handler: defaultEventCallbacks.PAIR_SUCCESS,
      },
    },
  };
  let username = "";
  const connect = async () => {
    let wallet;
    if ($store.wallet) {
      wallet = $store.wallet;
    } else {
      wallet = new BeaconWallet(walletOptions as any);
    }

    try {
      await wallet.requestPermissions({
        network: {
          type: NetworkType.MAINNET,
          rpcUrl: $store.settings[$store.network].rpcUrl,
        },
      });
      $store.Tezos.setWalletProvider(wallet);
      const userAddress = await wallet.getPKH();
      store.updateUserAddress(userAddress);
      username = userAddress; // shortenHash(userAddress);
      username = await fetchTezosDomain($store.Tezos, userAddress);
      console.log($store);
    } catch (err) {
      console.error(err);
    }
  };

  const disconnect = () => {
    $store.wallet.client.destroy();
    store.updateWallet(undefined);
    store.updateUserAddress(undefined);
  };


  onMount(async () => {
    // initializes the wallet
    const wallet = new BeaconWallet(walletOptions as any);
    const activeAccount = await wallet.client.getActiveAccount();
    if (activeAccount) {
      const userAddress = await wallet.getPKH();
      store.updateUserAddress(userAddress as TezosAccountAddress);
      store.updateWallet(wallet);
      $store.Tezos.setWalletProvider(wallet);
      //localStorageStore.init(userAddress);

      username = userAddress; // shortenHash(userAddress);
      username = await fetchTezosDomain($store.Tezos, userAddress);

      setInterval(async () => {
        const balance = await $store.Tezos.tz.getBalance(userAddress);
        store.updateTezBalance(balance.toNumber());
        console.log(balance);
      }, 10000);
    } else {
      console.log("no active account ");
      //localStorageStore.init();
    }
  });
</script>

<header>
  <div>
    {#if $store.userAddress}
      <div>
        <button class="border" on:click={disconnect}>
          <img
            src={`https://services.tzkt.io/v1/avatars/${$store.userAddress}`}
            alt="user-avatar"
          />
          &nbsp; {username}
        </button>
        <span> account_balance </span>
        &nbsp;
      </div>
    {/if}
  </div>
  <div class="">
    {#if !$store.userAddress}
      <button class= "px-4 py-1 text-md text-purple-600 font-semibold rounded-full border border-purple-400 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" on:click={connect}> Connect </button>
    {/if}
  </div>
</header>
