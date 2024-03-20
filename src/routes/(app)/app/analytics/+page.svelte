<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col p-8">
	<div class="grid grid-cols-3 gap-12">
		<!-- single card  -->
		<div
			class="flex w-3/4 flex-col space-y-2 rounded-lg border-2 border-transparent bg-slate-100 p-4 shadow-md transition hover:scale-105 hover:border-slate-500 dark:bg-slate-800"
		>
			<!-- icon  -->
			<Icon icon="mdi:police-station" class="mb-2 text-5xl" />
			<!-- title  -->
			<div class="text-xl font-bold">Station</div>
			<!-- tagline  -->
			<div class="text-base text-muted-foreground">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore veritatis,
			</div>
		</div>
	</div>
</div>
