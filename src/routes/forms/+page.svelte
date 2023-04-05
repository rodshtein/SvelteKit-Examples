<script>
  export let form;

  let shapes = form?.shapes || []
</script>



{#each shapes as {color, shape}}
  Color:{color}<br>
  Shape:{shape}
  <br>
  <br>
{/each}


{#if !form }
<form method="POST">
  <input name="name" type="text">
  <button>Send</button>
</form>
{/if}