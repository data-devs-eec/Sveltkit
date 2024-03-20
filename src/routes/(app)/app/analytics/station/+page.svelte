<script lang="ts">
    import CDropdown from '$lib/custom_components/app/analysis/c_dropdown.svelte';
    import { Attributes } from '$lib/data/analysis_data';
    import * as Card from "$lib/components/ui/card";
    let column: string[] = ["FIR_Count : ", "IO_Count : ", "Arresed_Count : "];
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
      
      