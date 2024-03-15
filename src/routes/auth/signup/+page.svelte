<script lang="ts">
    import type { ActionData } from "./$types";
    import { Input } from '$lib/components/ui/input';
    export let form: ActionData;

    function validatePasswords(event: Event) {
        const formElement = event.currentTarget as HTMLFormElement;
        const password = formElement.elements.namedItem('password') as HTMLInputElement;
        const rePassword = formElement.elements.namedItem('rePassword') as HTMLInputElement;

        if (password.value !== rePassword.value) {
            alert("Passwords do not match");
            event.preventDefault(); // Prevent form submission
        } else {
            formElement.submit(); // Submit the form if passwords match
        }
    }

    function handleSubmit(event: Event) {
        validatePasswords(event); // Validate passwords before submission
        // Prevent default behavior - this is handled in validatePasswords
    }
</script>

<form action="/auth/signup" method="POST" on:submit={handleSubmit}>
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

            <Input
                class="w-full p-3 mb-4 rounded border border-red-500"
                type="password"
                name="rePassword"
                placeholder="Re-Password"
            />

            <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline">Sign up!</button>
        </div>
    </div>
</form>



  
  {#if form?.message}
    <h1>{form.message}</h1>
  {/if}
