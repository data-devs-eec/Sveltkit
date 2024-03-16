<script lang="ts">
	import CNavbar from '$lib/custom_components/app/c_navbar.svelte';
	import CSidebar from '$lib/custom_components/app/c_sidebar.svelte';
	import '../../app.css';
	import Seperator from '$lib/components/ui/separator/separator.svelte';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<div class="flex h-screen flex-row">
	<div class="basis-1/6 p-4">
		<CSidebar />
	</div>
	<Seperator orientation="vertical" />
	<div class="flex basis-5/6 flex-col">
		<CNavbar />
		<slot />
	</div>
</div>
