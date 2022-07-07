<script lang="ts">
  import Logo from "../assets/images/logo.svg";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import AiOutlineMenu from "svelte-icons-pack/ai/AiOutlineMenu";
  import AiOutlineClose from "svelte-icons-pack/ai/AiOutlineClose";
  const navLinks = [
    { id: 1, text: "Features" },
    { id: 2, text: "Team" },
    { id: 3, text: "Sign In" },
  ];
  let open: boolean = false;

  const changeToggle = () => (open = !open);
</script>

<header class="container p-5 mx-auto">
  <nav class="md:flex md:items-center md:justify-between">
    <div class="flex justify-between items-center">
      <img src={Logo} alt="" />
      <div on:click={changeToggle} class="md:hidden z-50">
        {#if open}
          <Icon src={AiOutlineClose} size="24" />
        {:else}
          <Icon src={AiOutlineMenu} size="24" />
        {/if}
      </div>
    </div>
    <div
      class={`bg-white absolute md:static left-0 ${
        open ? "top-0 w-full min-h-screen flex flex-col justify-center items-center" : "top-[-2000px]"
      }`}
    >
      {#each navLinks as item (item.id)}
        <a class="my-4 md:ml-12" href="/">{item.text}</a>
      {/each}
    </div>
  </nav>
</header>
