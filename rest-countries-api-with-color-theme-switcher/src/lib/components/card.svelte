<script lang="ts">
	export let flag: string;
	export let name: string;
	export let population: number;
	export let region: number;
	export let capital: string;
</script>

<div class="card">
	<img src={flag} alt="" />
	<div class="text">
		<h1>{name}</h1>
		<p><b>Population :</b> {population.toLocaleString()}</p>
		<p><b>Region :</b> {region}</p>
		<p><b>Capital :</b> {capital}</p>
	</div>
</div>
