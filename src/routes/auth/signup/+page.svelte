<script lang="ts">
    import type { ActionData } from "./$types";
    import { Input } from '$lib/components/ui/input';
	import { Button } from "$lib/components/ui/button";
  
    export let form: ActionData;
  </script>
  
  
  
  <form action="/auth/signup" method="POST">
    <div class="flex flex-col justify-center items-center min-h-screen gap-10 bg-slate-300">
        <h1 class="text-2xl font-semibold mb-4">Sign up</h1>

        <div class="bg-slate-500 p-5 rounded-xl w-full max-w-md">
            <Input
                class="w-full p-3 mb-4 rounded border border-red-500"
                type="email"
                name="email"
                placeholder="E-mail"
                value={form?.email ?? ""}
            />

            <Input
                class="w-full p-3 mb-4 rounded border border-red-500"
                type="password"
                name="password"
                placeholder="Password"
                value={form?.password ?? ""}
            />

            <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline">Sign up!</button>
        </div>
    </div>
</form>


  
  {#if form?.message}
    <h1>{form.message}</h1>
  {/if}
