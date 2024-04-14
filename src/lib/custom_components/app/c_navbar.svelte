<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import CNightMode from '../c_night_mode.svelte';
	import CTime from './c_time.svelte';
</script>

<div class="flex flex-row items-center justify-between px-4 py-2">
	<div>
		<CTime />
	</div>
	<div class="flex flex-row space-x-4">
		<CNightMode />
		<form method="post" action="/app?/logout">
			<Button type="submit" variant="outline">Logout</Button>
		</form>
	</div>
</div>
<Separator />
