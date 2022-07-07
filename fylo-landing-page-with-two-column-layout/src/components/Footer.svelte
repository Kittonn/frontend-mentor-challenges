<script lang="ts">
  import EmailIcon from "../assets/images/icon-email.svg";
  import PhoneIcon from "../assets/images/icon-phone.svg";
  import Logo from "../assets/images/logoWhite.svg";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import AiOutlineInstagram from "svelte-icons-pack/ai/AiOutlineInstagram";
  import FaBrandsTwitter from "svelte-icons-pack/fa/FaBrandsTwitter";
  import FaBrandsFacebookF from "svelte-icons-pack/fa/FaBrandsFacebookF";
  const Link1 = [
    { id: 1, link: "About Us " },
    { id: 2, link: "Jobs " },
    { id: 3, link: "Press " },
    { id: 4, link: "Blog" },
  ];
  const Link2 = [
    { id: 1, link: "Contact Us " },
    { id: 2, link: "Terms " },
    { id: 3, link: "Privacy" },
  ];
</script>

<div class="bg-[#070439] text-white">
  <div class="container px-5 pt-[4rem] pb-12 mx-auto ">
    <img src={Logo} alt="" />
    <div class="flex sm:flex-row flex-col mt-8 justify-between max-w-[1400px] ">
      <div class="mb-8">
        <p class="mb-2">
          <img class="inline mr-2" src={PhoneIcon} alt="" /> Phone: +1-543-123-4567
        </p>
        <p>
          <img src={EmailIcon} class="inline mr-2" alt="" /> example@fylo.com
        </p>
      </div>
      <div class="mb-8">
        {#each Link1 as item (item.id)}
          <a class="block font-normal mb-2" href="/">{item.link}</a>
        {/each}
      </div>
      <div class="mb-8">
        {#each Link2 as item (item.id)}
          <a class="block font-normal mb-2" href="/">{item.link}</a>
        {/each}
      </div>
      <div class="flex justify-center items-center sm:items-start">
        <div
          class="inline-block rounded-full border-[1px] border-white p-2 mx-2"
        >
          <Icon color="#fff" src={FaBrandsFacebookF} />
        </div>
        <div
          class="inline-block rounded-full border-[1px] border-white p-2 mx-2"
        >
          <Icon color="#fff" src={FaBrandsTwitter} />
        </div>
        <div
          class="inline-block rounded-full border-[1px] border-white p-2 mx-2"
        >
          <Icon color="#fff" src={AiOutlineInstagram} />
        </div>
      </div>
    </div>
  </div>
</div>
