<script lang="ts">
	export let flag: string;
	export let name: string;
	export let population: number;
	export let region: number;
	export let capital: string;
</script>

<div class="card">
	<img src={flag} alt="" />
	<h1>{name}</h1>
	<p>{population}</p>
	<p>{region}</p>
	<p>{capital}</p>
</div>

<style>
    .card {
        background-color: white;
        
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
    .card img {
        /* max-width: 200px; */
        display: block;
        width: 100%;
        height: 150px;
        object-fit: cover;
        
    }
</style>
