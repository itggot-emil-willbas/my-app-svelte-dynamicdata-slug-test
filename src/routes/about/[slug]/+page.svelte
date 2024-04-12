<script>
// // @ts-nocheck

// 	/** @type {import('./$types').PageData} */
 	export let data;
  //let path = data.post.src
  //let banan = `$lib/images/${path}`
  //import bild from banan;

  //let kiwi = "/src/lib/images/svelte-welcome.webp"
  

</script>

<h1>Extra:{data.post.extra}</h1>

<img src="{data.post.src}" alt="En bild">

<!-- <h2>{data.post.title}</h2>
{#each banan as item}
  <h1>{item.name}</h1>
  <p>{item.age}</p>
{/each} -->

<!-- <div>{@html data.post.content}</div>
<div>{@html data.post.extra}</div> -->