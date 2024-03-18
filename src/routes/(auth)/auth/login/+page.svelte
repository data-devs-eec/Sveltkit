<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import { Label } from '$lib/components/ui/label';
	import Button from '$lib/components/ui/button/button.svelte';
	import CNightMode from '$lib/custom_components/c_night_mode.svelte';
	import BackGround from '$lib/img/auth_page_background.webp';
	import { superForm } from 'sveltekit-superforms';
	export let data;
	const { form, enhance, errors, message, constraints } = superForm(data.form);
</script>

<div class="flex h-screen flex-row">
	<div class="flex h-full basis-1/2 flex-col">
		<img src={BackGround} alt="logo" class="h-full w-full object-cover object-center opacity-80" />
	</div>
	<div class="flex w-full basis-1/2 flex-col p-8">
		<div class="flex flex-row justify-end space-x-4">
			<Button variant="outline">Go to Home</Button>
			<CNightMode />
		</div>
		<form
			method="post"
			class="flex h-full flex-col items-center justify-center space-y-6 rounded p-8"
			use:enhance
		>
			<div class="text-center text-2xl font-bold">Login</div>
			<div class="text-center text-sm text-slate-400">Gain insights that drive success.</div>
			<div class="flex flex-col space-y-2">
				<Label for="email" class="">Email</Label>
				<Input name="email" bind:value={$form.email} required type="email" class="w-96" />
				{#if $errors.email}
					<span class="text-sm text-red-500">{$errors.email}</span>
				{/if}
			</div>
			<div class="flex flex-col space-y-2">
				<Label for="password" class="">Password</Label>
				<Input
					name="password"
					bind:value={$form.password}
					required
					type="password"
					class="w-96"
					{...$constraints.password}
				/>
				{#if $errors.password}
					<span class="text-sm text-red-500">{$errors.password}</span>
				{/if}
			</div>
			<Button variant="link" class="text-start">Forget Password ?</Button>
			<Button type="submit" variant="default">Login</Button>
		</form>
		{#if $message}
			<div>
				{$message}
			</div>
		{/if}
	</div>
</div>
