<script>
  import { page } from '$app/stores';

  // export let data
</script>

<nav>
<ul>
  <li><a href="/">Main</a></li>
  <li><a href="/forms">Forms</a></li>
  <li><a href="/page-data">Page data</a></li>
  <li><a href="/locals">Locals</a></li>
  <li><a href="/s-p">Search params</a></li>
  <li><a href="/login">Log in</a></li>
  <li><a href="/logout">Log out</a></li>
</ul>

<div>
  <span>Page data: {$page.data.staff}</span>
  <span>User: {$page.data.user}</span>
<div>
</nav>

<slot/>

<style>
  :global(body) {
    padding: 20px;
    font-family: sans-serif;
  }
  div {
    display: flex;
    gap: 20px;
  }
  nav {
    display: flex;
    justify-content: space-between;
  }
  ul {
    padding: 0;
    display: flex;
    list-style: none;
    gap: 10px;
  }
</style>