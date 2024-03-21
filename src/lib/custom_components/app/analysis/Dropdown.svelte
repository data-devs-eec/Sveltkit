

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import CDropdown from '$lib/custom_components/app/analysis/c_dropdown.svelte';

  export let data = [];
  export let width = 100;
  export let emptyText = 'Select';
  export let selectText = 'Select';

  const dispatch = createEventDispatcher();

  function handleChange(event) {
    dispatch('select', event.target.value);
  }
</script>

<select class="rounded-lg border-2 border-slate-300 p-2 transition" style="width: {width}px;" on:change={handleChange}>
  <option value="">{emptyText}</option>
  {#each data as { value, label }}
    <option value={value}>{label}</option>
  {/each}
</select>
