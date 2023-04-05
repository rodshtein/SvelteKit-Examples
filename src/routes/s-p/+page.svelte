<script>
	export let data;
	import { onMount } from 'svelte'

	let time = 0
	onMount(()=>{
		let t = setInterval(()=>time++, 1000);
		return ()=> clearInterval(t);
	})
</script>


<h1>Color is { data.color }</h1>

<a href='?color=Red'>Red</a>
<a href='?color=Blue'>Blue</a>
<a href='?color=Green'>Green</a>

<p>Page live: {time} s</p>