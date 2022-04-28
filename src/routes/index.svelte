<script context="module">
  export async function load({fetch}) {
    try {
      const res = await fetch('/nyheter/featured.json')
      const data = await res.json()
      return {
        props: data
      }
    } catch (err) {
      console.log('500:', err)
    }
  }
</script>

<script>
  import PostsGrid from '$lib/PostsGrid.svelte'

  export let posts
</script>

<svelte:head>
  <title>Nyheter</title>
</svelte:head>

<div>
  <p>Dette er en test</p>
</div>

<PostsGrid {posts} />