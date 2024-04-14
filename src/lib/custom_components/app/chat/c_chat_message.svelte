<script lang="ts">
	export let role: 'user' | 'bot';
	export let message: string;
	import { Speech, BotMessageSquare } from 'lucide-svelte';
</script>

<div class="my-4 flex flex-col space-y-2">
	<div class="flex flex-row font-bold">
		{#if role === 'user'}
			<Speech size="24" class="mr-2" />
			You
		{:else}
			<BotMessageSquare size="24" class="mr-2" />
			Nova Chat
		{/if}
	</div>
	<div>{message}</div>
</div>
