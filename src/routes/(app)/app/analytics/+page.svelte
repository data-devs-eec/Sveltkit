<!-- <script lang="ts">
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
	<div class="w-3/4">
		<canvas bind:this={canvasElement}> </canvas>
	</div>
</div> -->
<script lang="ts">
  import { goto } from '$app/navigation'; // Import the goto function from the correct location
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import station from '$lib/img/station.jpg';
  import district from '$lib/img/District.jpg';
  import crime from '$lib/img/crime.jpg';
  import time from '$lib/img/time.jpg';

  const Analysis = [
    { title: 'Stations', background: station, route: '/app/analytics/station' },
    { title: 'District', background: district, route: '/app/analytics/district' },
    { title: 'Crime Category', background: crime, route: '/app/analytics/crime_cat' },
    { title: 'Time frame', background: time, route: '/app/analytics/time_frame' },
    { title: 'Other', background: time, route: '/app/analytics/other_' } 
  ];
</script>

<div class="flex justify-center items-center h-screen"> 
  <Carousel.Root class="w-100 min-w-xl">
    <Carousel.Content class="">
      {#each Analysis as { title, background, route }, index (index)}
        <Carousel.Item class="pl-1 md:basis-1/2 lg:basis-1/3 h-70v w-80v" >
          <div class="relative">
            <div class="absolute inset-0 bg-cover bg-center opacity-20" style="background-image: url('{background}')"on:click={() => goto(route)}></div> <!-- Adjusted opacity -->
            <Card.Root class="w-full h-full bg-transparent rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <Card.Content class="flex aspect-square items-center justify-center w-full h-full bg-white rounded-lg">
                <span class="text-2xl font-semibold text-gray-900">{index + 1}</span>
                <span class="ml-2 font-bold text-lg text-red-700">{title}</span>
              </Card.Content>
            </Card.Root>
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>
</div>


  








