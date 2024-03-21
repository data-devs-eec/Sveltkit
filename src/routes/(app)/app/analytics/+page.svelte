<script lang="ts">
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';

	const cardsArray = [
		{
			icon: 'mdi:police-station',
			title: 'Police Station',
			tagline: 'Quickly locate and access information about the nearest police station for immediate assistance and support with law enforcement matters',
			route: '/app/analytics/police-station'
		},
		{
			icon: 'material-symbols:map-outline-rounded',
			title: 'Regional Overview',
			tagline: 'Explore detailed insights into law enforcement activities and trends within your district, aiding in strategic decision-making and resource allocation.',
			route: '/app/analytics/district'
		},
		{
			icon: 'mdi:handcuffs',
			title: 'Community Focus',
			tagline: 'Drill down into specific village-level data, facilitating targeted community policing efforts and fostering closer engagement with local residents.'
		},
		{
			icon: 'streamline:nature-ecology-green-house-glass-building-plants-crops-produce-farm',
			title: 'Incident Analysis',
			tagline: 'Gain a comprehensive overview of crime categories and their prevalence, enabling proactive measures to address emerging crime trends effectively.'
		},
		{
			icon: 'streamline:money-graph-pie-chart-product-data-analysis-analytics-pie-graph-business-chart',
			title: 'Temporal Analysis',
			tagline: 'Analyze temporal patterns in crime incidence over time, empowering informed decision-making and resource allocation for law enforcement operations.'
		}
	];
</script>

<div class="flex flex-col p-8">
	<div class="grid grid-cols-3 gap-12">
		{#each cardsArray as card}
			<!-- single card  -->
			<button
				on:click={() => card.route && goto(card.route)}
				class="flex w-3/4 flex-col space-y-2 rounded-lg border-2 bg-slate-100 p-4 shadow-md transition hover:scale-105 hover:border-gray-800 dark:bg-slate-800"
			>
				<!-- icon  -->
				<Icon icon={card.icon} class="mb-2 text-5xl" />
				<!-- title  -->
				<div class="text-xl font-bold">{card.title}</div>
				<!-- tagline  -->
				<div class="text-base text-muted-foreground text-start">{card.tagline}</div>
			</button>
		{/each}
	</div>
</div>
