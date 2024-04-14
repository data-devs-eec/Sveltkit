<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import CChatMessage from '$lib/custom_components/app/chat/c_chat_message.svelte';
	import { SendHorizontal } from 'lucide-svelte';
	const messages: {
		role: 'bot' | 'user';
		message: string;
	}[] = [
		{
			role: 'bot',
			message: 'Hello I am NovaChat, your personal assistant. How can I help you today?'
		},
		{
			role: 'user',
			message: 'Can you get officers name starting with A?'
		},
		{
			role: 'bot',
			message: `The following officers' names start with the letter 'A' are A K AGSAR (ASI), A M HUKKERI (HC),
             A M YARAGATTI (ASI), A RAJEEV (PI), A T Amminabhavi (PSI)`
		}
	];
</script>

<div class="flex h-full flex-col justify-between p-8">
	<div class="flex flex-col">
		<Separator />
		<!-- AI Message -->
		{#each messages as message}
			<CChatMessage message={message.message} role={message.role === 'user' ? 'user' : 'bot'} />
			<Separator />
		{/each}
	</div>
	<div class="flex flex-row space-x-4">
		<Input placeholder="Type your message here" />
		<Button>
			Send
			<SendHorizontal class="mx-2" />
		</Button>
	</div>
</div>
