<script lang="ts">
    import CDropdown from '$lib/custom_components/app/analysis/c_dropdown.svelte';
    import { Attributes } from '$lib/data/analysis_data';
    import * as Card from "$lib/components/ui/card";
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
    let column: string[] = ["FIR_Count : ", "IO_Count : ", "PoliceStations : ", "ArrestedCount:"];

    let districts = ['District A', 'District B', 'District C'];
  let policeStations = [10, 15, 8]; // Example data: Number of police stations in each district
  let graphs: string[] = ['bar', 'pie'];

  // Variable to hold the Chart.js instance
  let charts: Chart[] = [];

  // Create charts based on chart types specified in the `graphs` array
  onMount(() => {
    graphs.forEach((type, index) => {
      const ctx = document.getElementById(`policeStationsChart${index}`);
      const chart = new Chart(ctx, {
        type: type as any, // Casting type to 'any' because Chart.js type expects a specific string
        data: {
          labels: districts,
          datasets: [{
            label: 'Number of Police Stations',
            data: policeStations,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
      charts.push(chart);
    });
  });
</script>

    <div class="flex flex-row space-x-8 justify-around">
        <CDropdown selectText="Select X Axis" data={Attributes} />
        <CDropdown selectText="Select Y Axis" data={[]} />
    </div>
    <div class="flex flex-row justify-evenly gap-2 m-5 text-center items-center">
        {#each column as col}
          <div class="w-48">
            <Card.Root class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <Card.Content class="text-black dark:text-white"> 
                {col}
              </Card.Content>
            </Card.Root>
          </div>
        {/each}
      </div>
      
      <div class="flex">
        {#each graphs as val, index}
          <div class="w-full mx-2" style="width: 300px; height: 300px;">
            <canvas id={`policeStationsChart${index}`}></canvas>
          </div>
        {/each}
      </div>
      