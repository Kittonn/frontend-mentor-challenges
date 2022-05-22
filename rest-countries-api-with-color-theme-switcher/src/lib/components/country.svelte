<script lang="ts">
    import { country_store } from "$lib/store/country_store";
    import Card from "$lib/components/card.svelte";
    const text_select = [
        {id:1,text:"All"},
        {id:2,text:"Africa"},
        {id:3,text:"Americas"},
        {id:4,text:"Asia"},
        {id:5,text:"Europe"},
        {id:6,text:"Oceania"}, 
    ]
    let select:any;
    $:data_filter = $country_store.filter((item:any)=>item.region===select)
    
</script>

<div>
    <select bind:value={select} >
        {#each text_select as text}
            <option value={text.text}>
                {text.text}
            </option>
        {/each}
    </select>
</div>
<div class="card-container">
    {#if select === "All"}
        {#each $country_store as country}
            <Card flag={country.flags[0]} name={country.name.official} population={country.population} region={country.region} capital={country.capital} />
        {/each}
        {:else}
        {#each data_filter as country}
        <Card flag={country.flags[0]} name={country.name.official} population={country.population} region={country.region} capital={country.capital} />
    {/each}
    {/if}
</div>

<style>
    .card-container {
        max-width: 1300px;
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-gap: 3rem;
    }
</style>