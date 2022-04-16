<script context="module">
  export async function load({fetch}) {
    try {
      const res = await fetch('/blog/all.json')
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
  import AuthorCard from '$lib/AuthorCard.svelte'
  import PostsGrid from '$lib/PostsGrid.svelte'

  export let posts
  export let authors
</script>

<svelte:head>
  <title>Nyheter</title>
</svelte:head>

<h1>Siste nyheter</h1>

<PostsGrid {posts} />

<h2 style="margin-top: 4rem">Forfatter{authors.length > 1 ? 'e' : ''}</h2>

{#each authors as author}
  <AuthorCard {author} />
{/each}
