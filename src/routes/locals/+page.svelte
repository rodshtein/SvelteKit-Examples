
<form method="POST" action='?/useStore'>
  <input name="state" type="text">
  <button>set to store</button>
  <button formaction="?/resetStore">reset</button>
</form>

<form method="POST" action='?/useLocals'>
  <input name="state" type="text">
  <button>set to locals</button>
</form>


<style>
 form {
   margin-bottom: 20px
 }
</style>