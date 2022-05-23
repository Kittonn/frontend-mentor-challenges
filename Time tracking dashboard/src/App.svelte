<script lang="ts">
  import { store } from "./lib/Store/store";
  import Card from "./lib/Components/card.svelte";
  import "./App.css"
</script>

<div class="container">
  <div class="grid-container">
    {#each $store as item}
      <div>
        <h3>{item.title}</h3>
        <h1>{item.timeframes.weekly.current}</h1>
        <p>Last Week - {item.timeframes.weekly.previous}</p>
      </div>
    {/each}
  </div>
</div>
