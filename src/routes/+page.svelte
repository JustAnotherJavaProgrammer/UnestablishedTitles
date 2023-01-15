<script>
    import { building } from "$app/environment";
    import Header from "$lib/Header.svelte";
    import Navbar from "$lib/Navbar.svelte";
</script>

<Header>
    <svelte:fragment slot="navbar"><Navbar /></svelte:fragment>
    <svelte:fragment slot="hero">You may wish to save the Irish woodlands</svelte:fragment>
    <svelte:fragment slot="title">Call Yourself a Lord Today</svelte:fragment>
    <svelte:fragment slot="subtitle"
        >(An absolutely useless gift
        {#if !building} in {new Date().getFullYear()}{/if})</svelte:fragment
    >
</Header>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="https://www.gov.ie/en/publication/57d2a-forestry-facts-and-news/#forestry-facts-and-news">Facts about forests</a>