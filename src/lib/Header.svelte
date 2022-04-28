<script context="module">
  import {page} from '$app/stores'
</script>

<script>
  export let blogTitle = 'Norsk anestesiologisk forening - NAFWeb'

  let path
  $: ({path} = $page)
</script>

<header>
  <span>{blogTitle}</span>
  <nav>
    <ul>
      <li><a data-selected={path === '/'} href="/">Hjem</a></li>
      <li><a data-selected={path === '/organisasjon'} href="/organisasjon">Organisasjon</a>
        <ul>
          <li><a data-selected={path === '/organisasjon/styret'} href="/organisasjon/styret">Styret i NAF</a></li>
        </ul>
      </li>
      <li><a data-selected={path === '/nyheter'} href="/nyheter">NAF ærespris</a></li>
      <li><a data-selected={path === '/nyheter'} href="/nyheter">Nyheter</a></li>
      <li><a data-selected={path === '/nyheter'} href="/nyheter">Nyheter</a></li>
    </ul>
  </nav>
</header>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a[data-selected='true'] {
    font-weight: 600;
    color: #555;
  }
  a {
    text-decoration: none;
    display: block;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1em;
  }
  @media screen and (min-width: 400px) {
    header {
      flex-direction: row-reverse;
      align-items: center;
    }
  }
</style>