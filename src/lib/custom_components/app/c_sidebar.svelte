<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import LineChart from 'lucide-svelte/icons/line-chart';
	import BotMessageSquare from 'lucide-svelte/icons/bot-message-square';
	import Bell from 'lucide-svelte/icons/bell';
	import ShieldCheck from 'lucide-svelte/icons/shield-check';
	import Settings from 'lucide-svelte/icons/settings';
	import LayoutDashboard from 'lucide-svelte/icons/layout-dashboard';
	import { page } from '$app/stores';
	const sideBarButtons = [
		{
			icon: LayoutDashboard,
			text: 'Dashboard',
			route: '/',
			selected: true
		},
		{
			icon: LineChart,
			text: 'Analytics',
			route: '/analytics',
			selected: false
		},
		{
			icon: BotMessageSquare,
			text: 'Nova Chat',
			route: '/chat',
			selected: false
		},
		{
			icon: Bell,
			text: 'Notifications',
			route: '/notifications',
			selected: false
		},
		{
			icon: ShieldCheck,
			text: 'Issues',
			route: '/issues',
			selected: false
		},
		{
			icon: Settings,
			text: 'Settings',
			route: '/settings',
			selected: false
		}
	];
</script>

<div class="items- flex flex-col space-y-4">
	{#each sideBarButtons as sideBarButton}
		<Button
			href={`/app${sideBarButton.route}`}
			variant={$page.url.pathname.includes(sideBarButton.route) ? 'default' : 'ghost'}
			class="w-full justify-start text-xl"
		>
			<svelte:component this={sideBarButton.icon} class="mr-4" />
			{sideBarButton.text}
		</Button>
	{/each}
</div>
