<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';
	import { tick } from 'svelte';
	export let data: { value: string; label: string }[];
	export let width:number = 200;
	export let value = '';
	export let selectText: string;
	export let emptyText: string = 'Not Found...';
	let open = false;
	$: selectedValue = data.find((f) => f.value === value)?.label ?? selectText;

	function onSelect(currentValue: string) {
		value = currentValue;
	}
	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
</script>

<Popover.Root bind:open let:ids>
	<Popover.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="outline"
			role="combobox"
			aria-expanded={open}
			class={`w-[${width}px] justify-between`}
		>
			{selectedValue}
			<ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
		</Button>
	</Popover.Trigger>
	<Popover.Content class={`w-[${width}px] p-0`}>
		<Command.Root>
			<Command.Input placeholder="Search framework..." />
			<Command.Empty>{emptyText}</Command.Empty>
			<Command.Group>
				{#each data as item}
					<Command.Item
						value={item.value}
						onSelect={() => {
							onSelect(item.value);
							closeAndFocusTrigger(ids.trigger);
						}}
					>
						<Check class={cn('mr-2 h-4 w-4', value !== item.value && 'text-transparent')} />
						{item.label}
					</Command.Item>
				{/each}
			</Command.Group>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
