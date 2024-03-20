<script lang="ts">
	import { type ChartItem, Chart } from 'chart.js/auto';
	import { onMount } from 'svelte';
	let canvasElement: ChartItem;
	let chart: Chart;
	let data = {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // X Axis
		datasets: [
			{
				label: 'No of FIRs filed in each crime category',
				data: [12, 19, 2, 5, 2, 3], // Y Axis
				backgroundColor: ['rgba(255, 134,159,0.4)'],
				borderWidth: 2,
				borderColor: ['rgba(255, 134, 159, 1)']
			},
			{
				label: 'No of FIRs filed in each crime category',
				data: [5, 19, 2, 5, 2, 3], // Y Axis
				backgroundColor: ['rgba(255, 134,159,0.4)'],
				borderWidth: 2,
				borderColor: ['rgba(255, 134, 159, 1)']
			}
		]
	};

	onMount(() => {
		chart = new Chart(canvasElement, {
			type: 'bar',
			data: data
		});
	});
</script>

<div class="flex w-3/4 flex-col">
	<canvas bind:this={canvasElement}> </canvas>
</div>
