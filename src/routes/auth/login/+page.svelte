<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from "$lib/components/ui/label";
</script>

<h1 class="flex justify-center text-slate-500">Login page</h1>
<div class="flex flex-col justify-center items-center min-h-screen gap-10 ">
    <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label for="email">Email</Label>
        <Input type="email" id="email" placeholder="email" class="border-red-500"/>
    </div>
	<div class="grid w-full max-w-sm items-center gap-1.5">
        <Label for="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" class="border-red-500" />
    </div>
    
    <div class="grid w-full max-w-sm items-center gap-1.5">
        <Button>Submit</Button>
    </div>
</div>
