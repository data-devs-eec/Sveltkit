<script lang="ts">
	import { formattedData, Fir_No, IOName,PolcieStsation,Arrested  } from '$lib/data/district_db.js';
	import { onMount, afterUpdate } from 'svelte';
	import CChart from '$lib/custom_components/app/analysis/c_chart1.svelte';
	import CDropdown from '$lib/custom_components/app/analysis/Dropdown.svelte';
  
	let selectedStation: string = '';
	let selectedCategory: string = '';
  
	function handleStationSelect(event: CustomEvent<any>) {
	  selectedStation = event.detail;
	}
  
	function handleCategorySelect(event: CustomEvent<any>) {
	  selectedCategory = event.detail;
	}
  </script>
<div class="flex flex-col p-8">
	<div class="my-4 w-1/2">
	  <CDropdown
		width={100}
		emptyText="Category"
		selectText="Select a Category"
		data={Object.keys(formattedData[Object.keys(formattedData)[0]]).map(category => ({ value: category, label: category }))}
		on:select={handleCategorySelect}
	  />
	  <CDropdown
		width={100}
		emptyText="station"
		selectText="Select a Police Station"
		data={Object.keys(formattedData).map(station => ({ value: station, label: station }))}
		on:select={handleStationSelect}
	  />
	</div>
	<div class="flex justify-between">
	  <div class="rounded-lg border border-gray-300 p-4 w-1/2 mr-2">
		<h1 class="text-xl font-bold">FirCount: {Fir_No.length}</h1>
	  </div>
	  <div class="rounded-lg border border-gray-300 p-4 w-1/2 ml-2">
		<h1 class="text-xl font-bold">IO's: {IOName.length}</h1>
	  </div>
	  <div class="rounded-lg border border-gray-300 p-4 w-1/2 ml-2">
		<h1 class="text-xl font-bold">Station: {PolcieStsation.length}</h1>
	  </div>
	  <div class="rounded-lg border border-gray-300 p-4 w-1/2 ml-2">
		<h1 class="text-xl font-bold">Arrest_Count: {Arrested.filter(arrested => arrested !== '0').length}</h1>
	  </div>
	  
	</div>
  
	<CChart {selectedStation} {selectedCategory} />
  </div>
	