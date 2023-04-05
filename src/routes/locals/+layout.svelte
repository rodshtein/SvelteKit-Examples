<script>
  export let data
  import Comp from './Comp.svelte'
</script>

<ul>
  <h3>Shared state:</h3>
  <li>by store: { data.store }</li>
  <li>by locals: { data.locals }</li>
  <!-- The Component gets its state from $page.data  -->
  <!-- More: https://kit.svelte.dev/docs/load#$page-data  -->
  <Comp/>
</ul>

<slot/>