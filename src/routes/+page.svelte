<script lang="ts">
    import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';

    function goTo(route: string) {
        goto(route);
    }
</script>
<h1 class="flex justify-center"> Welcome Page</h1>
<div class="flex justify-center items-center h-screen flex-col gap-10">
<Button class="border border-custom-red bg-slate-600" on:click={() => goTo('auth/signup')}>Signup</Button>
<Button class="border border-custom-red bg-slate-600" on:click={() => goTo('auth/login')}>Login</Button>
</div>


