<script lang="ts">
	import CChart from '$lib/custom_components/app/analysis/c_chart.svelte';
import CDropdown from '$lib/custom_components/app/analysis/c_dropdown.svelte';
</script>

<div class="flex flex-col p-8">
	<div class="my-4 w-1/2">
		<CDropdown
			width={1000}
			emptyText="Enter a valid Police Station"
			selectText="Select a Police Station"
			data={[
				{
					value: 'bengaluru',
					label: 'Bengaluru'
				},
				{
					label: 'Ramapuram',
					value: 'ramapuram'
				}
			]}
		/>
	</div>
	<div class="flex flex-row my-4">
		<!-- single card -->
		<div class="flex flex-col rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
            <div class="font-bold">FIRs Filed</div>
            <div class="italic">1000</div>
        </div>
	</div>
    <!-- Chart  -->
    <CChart />
</div>
