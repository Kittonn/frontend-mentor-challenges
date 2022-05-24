<script lang="ts">
  import { store } from "./lib/Store/store";
  import Card from "./lib/Components/card.svelte";
  import "./App.css"
  let select = ["Daily","Weekly","Monthly"]
  // let split_data = $store.filter(item=>item.)
</script>

<div class="container">
  <div class="grid-container">
    <div class="item-1" id="item-1">
      <div class="item-1-top">
        <img src="./images/image-jeremy.png" class="profile-img" alt="">
        <p>Report for</p>
        <div class="name">
          <h1>Jeremy</h1>
        <h1>Robson</h1>
        </div>
      </div>
      <div class="item-1-bottom">
        {#each select as item}
          <button>{item}</button>
        {/each}
      </div>
    </div>
    {#each $store as item }
      <div class={item.title}>
        <div class="content">
          <div class="content-top">
            <p>{item.title}</p>
            <img src="./images/icon-ellipsis.svg" alt="">
          </div>
        <p class="content-center">{item.timeframes.weekly.current}hrs</p>
        <p class="content-footer">Last Week - {item.timeframes.weekly.previous}hrs</p>
        </div>
      </div>
    {/each}
  </div>
</div>
