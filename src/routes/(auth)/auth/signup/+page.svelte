<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import CNightMode from '$lib/custom_components/c_night_mode.svelte';
	import BackGround from '$lib/img/auth_page_background.webp';
	import * as Select from '$lib/components/ui/select';
	import * as Form from '$lib/components/ui/form';
	import { superForm } from 'sveltekit-superforms';
	import { goto } from '$app/navigation';
	export let data;
	const form = superForm(data.form, {
		onResult({ result }) {
			if (result.type === 'redirect') {
				goto(result.location);
			}
		}
	});
	const { form: formData, enhance } = form;
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
		<div class="text-center text-2xl font-bold">Sign Up</div>
		<div class="text-center text-sm text-slate-400">Get started by Requesting Access</div>
		<form
			use:enhance
			method="post"
			class="flex h-full w-full flex-col items-center justify-center space-y-2 rounded p-8"
		>
			<!-- Name  -->
			<Form.Field {form} name="name">
				<Form.Control let:attrs>
					<Form.Label>Name</Form.Label>
					<Input {...attrs} bind:value={$formData.name} class="w-96" />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<!-- Email  -->
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input {...attrs} bind:value={$formData.email} class="w-96" />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<!-- Phone  -->
			<Form.Field {form} name="phone">
				<Form.Control let:attrs>
					<Form.Label>Phone Number</Form.Label>
					<Input {...attrs} class="w-96" bind:value={$formData.phone} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<!-- District  -->
			<Form.Field {form} name="district">
				<Form.Control let:attrs>
					<Form.Label>District</Form.Label>
					<Select.Root
						onSelectedChange={(v) => {
							if (v) {
								$formData.district = String(v.value);
							}
						}}
					>
						<Select.Trigger class="w-96">
							<Select.Value placeholder="Select District..." />
						</Select.Trigger>
						<Select.Content>
							{#each data.districts as district}
								<Select.Item value={district.id}>{district.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
					<input type="text" hidden {...attrs} bind:value={$formData.district} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<!-- Designation  -->
			<Form.Field {form} name="designation">
				<Form.Control let:attrs>
					<Form.Label>Designation</Form.Label>
					<Select.Root
						onSelectedChange={(v) => {
							if (v) {
								$formData.designation = String(v.value);
							}
						}}
					>
						<Select.Trigger class="w-96">
							<Select.Value placeholder="Select Designation..." />
						</Select.Trigger>
						<Select.Content>
							{#each data.designations as designation}
								<Select.Item value={designation.id}>{designation.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
					<input type="text" {...attrs} hidden bind:value={$formData.designation} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<!-- Password  -->
			<Form.Field {form} name="password">
				<Form.Control let:attrs>
					<Form.Label>Password</Form.Label>
					<Input {...attrs} type="password" bind:value={$formData.password} class="w-96" />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<!-- Confirm Password  -->
			<Form.Field {form} name="passwordConfirmation">
				<Form.Control let:attrs>
					<Form.Label>Confirm Password</Form.Label>
					<Input
						{...attrs}
						type="password"
						bind:value={$formData.passwordConfirmation}
						class="w-96"
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Button variant="link" class="text-start" href="/auth/login"
				>Already Have an Account ? Login In</Button
			>
			<Button type="submit" variant="default">Sign Up</Button>
		</form>
	</div>
</div>
