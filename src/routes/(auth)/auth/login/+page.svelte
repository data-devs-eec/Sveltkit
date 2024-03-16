<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import { Label } from '$lib/components/ui/label';
	import Button from '$lib/components/ui/button/button.svelte';
	import CNightMode from '$lib/custom_components/c_night_mode.svelte';
	import BackGround from '$lib/img/auth_page_background.webp';
</script>

<div class="flex h-screen flex-row">
	<div class="flex h-full basis-1/2 flex-col">
		<img src={BackGround} alt="logo" class="h-full w-full object-cover object-center" />
	</div>
	<div class="flex w-full basis-1/2 flex-col p-8">
		<div class="flex flex-row space-x-4 justify-end">
            <Button variant="outline">
                Go to Home
            </Button>
			<CNightMode />
		</div>
		<form class="flex flex-col space-y-4 rounded p-8 items-center justify-center h-full">
			<div class="text-center text-2xl font-bold">Login</div>
			<div class="text-center text-sm text-slate-400">Gain insights that drive success.</div>
			<div class="flex flex-col space-y-2">
				<Label for="email" class="">Email</Label>
				<Input name="email" required type="email" class="w-96" />
			</div>
			<div class="flex flex-col space-y-2">
				<Label for="password" class="">Password</Label>
				<Input name="password" required type="password" class="w-96" />
			</div>
			<Button variant="link" class="text-start">Forget Password ?</Button>
			<Button type="submit" variant="default">Login</Button>
		</form>
	</div>
</div>
