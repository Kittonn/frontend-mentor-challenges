<script lang="ts">
  // import Cal from "./lib/Component/cal.svelte";
  import "./App.css";
  let bill: number;
  let tip_percent_arr = [
    { id: 1, value: 5,text:"5%" },
    { id: 2, value: 10,text:"10%" },
    { id: 3, value: 15,text:"15%" },
    { id: 4, value: 25,text:"25%" },
    { id: 5, value: 50,text:"50%" },
  ];
  let tip_percent:number;
  let tip_percent_input:number;
  let people:number;
  let tip_amount:number = 0;
  let total:number = 0;
  $:tip_amount = bill * ((tip_percent) / 100) / people;
  $:total = (bill + tip_amount) / people
</script>

<input type="number" bind:value={bill} />
<p>{bill}</p>

{#each tip_percent_arr as item (item.id)}
  <button on:click={()=>tip_percent=item.value}>{item.text}</button>
{/each}
<input type="number" bind:value={tip_percent}>
{tip_percent}

<input type="number" bind:value={people}>
{people}

{String(tip_amount) === "NaN" || String(tip_amount) === "Infinity" ? 0 :tip_amount}
{String(total) === "NaN"|| String(total) === "Infinity" ? 0 :total}