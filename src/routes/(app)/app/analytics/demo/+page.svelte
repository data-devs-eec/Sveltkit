<script lang="ts">
	import CDropdown from '$lib/custom_components/app/analysis/c_dropdown.svelte';
	import { Attributes } from '$lib/data/analysis_data';
	import { Chart, type ChartItem } from 'chart.js/auto';
	import { onMount } from 'svelte';
	const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
	let canvasElement: ChartItem;
	const data = { 
		labels: labels,
		datasets: [
			{
				label: 'My First Dataset',
				data: [65, 59, 80, 81, 56, 55, 40],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(255, 205, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(201, 203, 207, 0.2)'
				],
				borderColor: [
					'rgb(255, 99, 132)',
					'rgb(255, 159, 64)',
					'rgb(255, 205, 86)',
					'rgb(75, 192, 192)',
					'rgb(54, 162, 235)',
					'rgb(153, 102, 255)',
					'rgb(201, 203, 207)'
				],
				borderWidth: 1
			}
		]
	};
	onMount(() => {
		const chart = new Chart(canvasElement!, {
			type: 'bar',
			data: data
		});
	});
</script>

<div class="flex flex-col p-4">
	<div class="flex flex-row space-x-8">
		<CDropdown selectText="Select X Axis" data={Attributes} />
		<CDropdown selectText="Select Y Axis" data={[]} />
	</div>
	<div class="w-1/4">
		<canvas class="w-1/2" bind:this={canvasElement}> </canvas>
	</div>
</div>
