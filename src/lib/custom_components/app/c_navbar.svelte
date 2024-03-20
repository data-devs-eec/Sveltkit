<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import CNightMode from '../c_night_mode.svelte';
	import CTime from './c_time.svelte';
</script>

<div class="flex flex-row items-center justify-between px-4 py-2">
	<div>
		<CTime />
	</div>
	<CNightMode />
</div>
<Separator />
