<script lang="ts">
  import Image from "./assets/images/illustration-hero.svg";
  import Icon from "./assets/images/icon-music.svg";
</script>

<main class="min-h-screen p-5 flex justify-center items-center bg-[#e0e8ff]">
  <div class="bg-white max-w-[350px] md:max-w-[450px] rounded-2xl overflow-hidden">
    <img src={Image} alt="" />
    <div class="p-6 md:p-12">
      <h1 class="text-center font-black text-2xl mb-4 text-[#1f2f56]">Order Summary</h1>
      <p class="text-center text-base max-w-[300px] mx-auto text-[#7280a7] font-medium">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div class="flex justify-between items-center p-4 md:p-6 mt-4 mb-8 bg-[#f5f7ff] rounded-xl">
        <div class="flex items-center">
          <img src={Icon} alt="" />
          <div class="ml-4">
            <h5 class="font-black text-[15px] md:text-base text-[#1f2f56]">Annual Plan</h5>
            <h6 class="text-[15px] md:text-base text-[#7280a7]">$59.99/year</h6>
          </div>
        </div>
        <button class="font-bold text-[#3829e0] underline text-xs md:text-sm hover-text">Change</button>
      </div>
      <button class="hover-button text-center w-full font-bold bg-[#3829e0] shadow-lg shadow-[#3829e0] p-3 rounded-xl text-white">Proceed to Payment</button>
      <button class="text-center w-full font-bold mt-6 text-[#7280a7]">Cancel Order</button>
    </div>
  </div>
</main>