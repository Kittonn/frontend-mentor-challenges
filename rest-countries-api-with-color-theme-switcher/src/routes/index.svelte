<script lang="ts">
	import { country_store } from '$lib/store/country_store';
	import Country from '$lib/components/country.svelte';
    import { onMount } from 'svelte';
	import axios from 'axios';

	let url = 'https://restcountries.com/v3/all';

	let loading: boolean = true;
	onMount(async () => {
		const res = await axios.get(url);
		country_store.set(res.data);
		loading = false;
	});
</script>

{#if loading}
	<p>loading</p>
{:else}
	<Country/>
{/if}
