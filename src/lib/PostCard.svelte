<script>
  import SanityImage from './SanityImage.svelte'

  export let post
</script>

<article>
  {#if post.image}
    <div class="image">
      <SanityImage image={post.image} maxWidth={300} />
    </div>
  {/if}
  <h2>
    <a rel="prefetch" href="/nyheter/{post.slug.current}">{post.title}</a>
  </h2>
  <p>Dette skal være et utdrag</p>
</article>

<style>
  article {
    display: flex;
    border: 1px #000;
    padding: 1rem;
  }

  h2 {
    margin: 1rem 0 0;
  }

  h2 a {
    text-decoration: none;
  }

  .image {
    padding-bottom: 62.5%;
    position: relative;
    overflow: hidden;
  }

  .image :global(img) {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
  }
</style>