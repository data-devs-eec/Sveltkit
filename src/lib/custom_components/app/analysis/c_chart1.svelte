<script lang="ts">
	import { Chart } from 'chart.js/auto';
	import { onMount, afterUpdate } from 'svelte';
	import { formattedData } from '$lib/data/district_db.js';
  
	export let selectedStation: string = '';
	export let selectedCategory: string = '';
  
	let canvasElement: HTMLCanvasElement;
	let chart: Chart;
  
	function updateChart() {
	  if (!selectedStation || !selectedCategory) return;
  
	  const selectedData = formattedData[selectedStation][selectedCategory];
	  
	  if (!canvasElement || !selectedData) return;
  
	  const ctx = canvasElement.getContext('2d');
	  if (!ctx) return;
  
	  if (chart) {
		chart.destroy();
	  }
  
	  chart = new Chart(ctx, {
		type: 'bar',
		data: {
		  labels: selectedData.map(item => item.label),
		  datasets: [{
			label: 'Number of FIRs',
			data: selectedData.map(item => item.value),
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 2
		  }]
		},
		options: {
		  scales: {
			y: {
			  beginAtZero: true
			}
		  }
		}
	  });
	}
  
	onMount(updateChart);
	afterUpdate(updateChart);
  </script>
  
  <canvas bind:this={canvasElement}></canvas>
  