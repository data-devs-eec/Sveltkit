<script setup lang="ts">
	import { onMount } from 'svelte';

	let currentTime = new Date().toLocaleTimeString();
	let currentDate = new Date().toLocaleDateString();

	onMount(() => {
		setInterval(() => {
			currentTime = new Date().toLocaleTimeString();
			currentDate = new Date().toLocaleDateString();
		}, 1000);
	});
</script>

<div class="text-center text-xl font-bold">
	{currentTime} IST {currentDate}
</div>
