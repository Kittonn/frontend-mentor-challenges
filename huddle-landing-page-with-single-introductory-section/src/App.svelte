<script lang="ts">
  import Logo from './assets/images/logo.svg'
  import MockUps from './assets/images/illustration-mockups.svg'
  import {
    FacebookFBrand,
    InstagramBrand,
    TwitterBrand,
  } from "svelte-awesome-icons";
</script>
<div class="min-h-screen container mx-auto flex flex-col p-5">
  <div class="mt-8"><img class="max-w-[200px] md:max-w-[500px]" src={Logo} alt=""></div>
  <div class="flex items-center flex-1 my-12 lg:flex-row flex-col justify-center lg:justify-between ">
    <div class="mr-8"><img class="w-full" src={MockUps} alt=""></div>
    <div class="lg:mt-0 mt-8">
      <h1>Build The Community Your Fans Will Love</h1>
      <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
      <button>Register</button>
    </div>
  </div>
  <div class="flex justify-center lg:justify-end mb-6">
    <FacebookFBrand class="icon" />
    <TwitterBrand class="icon" />
    <InstagramBrand class="icon" />
    
  </div>
</div>