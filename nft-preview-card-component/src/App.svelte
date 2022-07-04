<script lang="ts">
  import iconETH from "./assets/images/icon-ethereum.svg";
  import iconClock from "./assets/images/icon-clock.svg";
  import iconView from "./assets/images/icon-view.svg";
  import imgAvatar from "./assets/images/image-avatar.png";
  import imgEquilibrium from "./assets/images/image-equilibrium.jpg";
</script>

<main class="min-h-screen p-5 flex justify-center items-center bg-[#0d192b]">
  <div class="bg-[#14253d] text-white max-w-[350px] p-6 rounded-xl">
    <img class="w-full rounded-lg" src={imgEquilibrium} alt="" />
    <div>
      <h1 class="text-xl my-4 font-semibold">Equilibrium #3429</h1>
      <p class="text-lg font-light text-[#8bacda]">Our Equilibrium collection promotes balance and calm.</p>
      <div class="flex justify-between my-4">
        <div class="text-base font-normal text-[#00fff7]"><img src={iconETH} class="inline" alt="">&nbsp; 0.041 ETH</div>
        <div class="text-sm font-light text-[#8bacda]"><img src={iconClock} class="inline" alt="">&nbsp; 3 days left</div>
      </div>
    </div>
    <hr>
    <div class="my-4">
      <img class="border-white border-[1px] rounded-full w-full max-w-[30px] inline-block" src={imgAvatar} alt="" />
      <h3 class="inline font-normal"><span class="text-[#8bacda]">&nbsp; Creation of </span> Jules Wyvern</h3>
    </div>
  </div>
</main>
