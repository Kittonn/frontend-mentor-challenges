<script lang="ts">
  import { store } from "./lib/Store/store";
  import Card from "./lib/Components/card.svelte";
  import "./App.css";
  let select = ["Daily", "Weekly", "Monthly"];
  let word = ["Yesterday", "Last Week", "Last Month"];
  let btn_select: any = "weekly";
</script>

<div class="container">
  <div class="grid-container">
    <div class="item-1" id="item-1">
      <div class="item-1-top">
        <img src="./images/image-jeremy.png" class="profile-img" alt="" />
        <div class="name-content">
          <p>Report for</p>
          <div class="name">
            <h1>Jeremy</h1>
            <h1>Robson</h1>
          </div>
        </div>
      </div>
      <div class="item-1-bottom">
        {#each select as item}
          <button
            on:click={() => (btn_select = item.toLowerCase())}
            class:active={item.toLowerCase() === btn_select}>{item}</button
          >
        {/each}
      </div>
    </div>
    {#each $store as item}
      <div class={item.title}>
        <div class="content">
          <div class="content-top">
            <p>{item.title}</p>
            <img src="./images/icon-ellipsis.svg" class="ellipsis" alt="" />
          </div>
          <p class="content-center">{item.timeframes[btn_select].current}hrs</p>
          <p class="content-footer">
            {btn_select === "weekly"
              ? word[1]
              : btn_select === "daily"
              ? word[0]
              : word[2]} - {item.timeframes[btn_select].previous}hrs
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>
