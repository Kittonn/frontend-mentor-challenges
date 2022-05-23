<script lang="ts">
	import { country_store } from '$lib/store/country_store';
	import Card from '$lib/components/card.svelte';
	const text_select = [
		{ id: 1, text: 'All' },
		{ id: 2, text: 'Africa' },
		{ id: 3, text: 'Americas' },
		{ id: 4, text: 'Asia' },
		{ id: 5, text: 'Europe' },
		{ id: 6, text: 'Oceania' }
	];

	let select: string;
	$: data_filter = $country_store.filter((item: any) => {
        if (search !== "") {
            select = "All"
            return item.name.common.toLowerCase().includes(search) || item.name.common.includes(search) 
        }
        if (select === "All") {
         return item;
        } else if (select !== "All") {
            return item.region === select
        }  
    });
	let search: string = '';
	
</script>

<div class="custom">
    <div>
        <input type="text" bind:value={search} placeholder="Search for a country."/>
        <p>{search}</p>
    </div>
    
    <div>
        <select bind:value={select}>
            {#each text_select as text}
                <option value={text.text}>
                    {text.text}
                </option>
            {/each}
        </select>
    </div>
</div>
<div class="card-container">
		{#each data_filter as country}
			<Card
				flag={country.flags[0]}
				name={country.name.common}
				population={country.population}
				region={country.region}
				capital={country.capital}
			/>
		{/each}
</div>
