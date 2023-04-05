<script>
	import { enhance } from '$app/forms';
  export let form;
</script>

{#if form?.errors}
	<ul >
		{#each Object.keys(form?.errors) as key}
			<li>{key} {form?.errors[key]}</li>
		{/each}
	</ul>
{/if}

<form use:enhance method="POST">
  <button>Log out</button>
</form>