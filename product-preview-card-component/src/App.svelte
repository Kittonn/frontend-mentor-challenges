<script lang="ts">
  import ImagePC from "./assets/images/image-product-desktop.jpg";
  import ImageMobile from "./assets/images/image-product-mobile.jpg"
  import Icon from "./assets/images/icon-cart.svg";
</script>

<main
  class="min-h-screen p-5 mx-auto bg-[#f2ebe3] flex justify-center items-center"
>
  <div
    class="grid grid-cols-1 md:grid-cols-2 max-w-[400px] md:max-w-[700px] bg-white rounded-xl overflow-hidden"
  >
    <img class="w-full hidden md:block" src={ImagePC} alt="" />
    <img src={ImageMobile} class='w-full md:hidden' alt="">
    <div class="p-8">
      <h5 class="uppercase font-medium text-sm text-[#6c7289] tracking-[0.3em]">perfume</h5>
      <h1 class="my-4 md:my-8 font-['Fraunces'] text-[#1c232b] font-bold text-3xl md:text-4xl">
        Gabrielle Essence Eau De Parfum
      </h1>
      <p class="font-medium text-sm md:text-base text-[#6c7289]">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div class="flex items-center mt-10 mb-4 md:my-8 flex-wrap">
        <h2 class="font-['Fraunces'] mr-8 text-[#3c8067] font-bold text-3xl">
          $149.99
        </h2>
        <h6 class="line-through text-sm text-[#6c7289]">$169.99</h6>
      </div>
      <button class="font-bold text-sm rounded-lg text-white w-full py-4 bg-[#3c8067]"
        ><img src={Icon} class="inline" alt="" /> Add to Cart</button
      >
    </div>
  </div>
</main>
