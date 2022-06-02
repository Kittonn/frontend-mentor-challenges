<script lang="ts">
	import type { dataArrI } from '$lib/Interface/interface';
	import { data_store } from '$lib/Store/data';
	const url =
		'https://raw.githubusercontent.com/Kittonn/Frontend-Mentor-Challenges/master/readme.md';

	let data_arr: dataArrI[] = [];

	let random = async () => {
		fetch(url)
			.then((res) => res.text())
			.then((data) => {
				let arr: string[][] = data
					.split('\n')
					.filter((line) => line !== '')
					.slice(4)
					.map((item) => item.split(' | '));
				data_arr = arr.map((item, i) => {
					let start = item[1].indexOf('[');
					let end = item[1].indexOf(']');
					let name = item[1].substring(start + 1, end);
					let start_0 = item[0].indexOf('(');
					let end_0 = item[0].indexOf(')');
					let img_path = item[0].substring(start_0 + 1, end_0).slice(9);
					return { id: i, name, img_path };
				});

				data_store.set(data_arr);
			});
	};

	random();

	let baseurl_img = 'https://raw.githubusercontent.com/Kittonn/Frontend-Mentor-Challenges/master/assets/'
</script>

<div class="title">
	<h1>Frontend</h1>
	<h2>Challenges</h2>
</div>
<div class="card-container">
	{#each $data_store as item (item.id)}
		<div class="card">
			<div class="card-img">
				<img src={`${baseurl_img}${item.img_path}`} alt="">
			</div>
			<div class="card-content">
				<h1>{item.name}</h1>
			</div>
		</div>
	{/each}
</div>
