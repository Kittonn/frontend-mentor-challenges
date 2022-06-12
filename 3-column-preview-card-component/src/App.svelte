<script lang="ts">
  import ImageLuxury from "./assets/images/icon-luxury.svg";
  import ImageSedans from "./assets/images/icon-sedans.svg";
  import ImageSuvs from "./assets/images/icon-suvs.svg";
</script>

<main class="flex items-center justify-center min-h-screen p-5 bg-[#f2f2f2]">
  <div class="grid grid-cols-1 md:grid-cols-3 max-w-[350px] md:max-w-[900px] rounded-lg overflow-hidden">
    <div class="bg-[#e38826] p-8 md:p-10">
      <img src={ImageSedans} alt="" />
      <h1>Sedans</h1>
      <p>
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip.
      </p>
      <button class="text-[#e38826]">Learn More</button>
    </div>
    <div class="bg-[#006970] p-8 md:p-10">
      <img src={ImageSuvs} alt="" />
      <h1>SUVs</h1>
      <p>
        Take an SUV for its spacious interior, power, and versatility. Perfect
        for your next family vacation and off-road adventures.
      </p>
      <button class="text-[#006970]">Learn More</button>
    </div>
    <div class="bg-[#004241] p-8 md:p-10">
      <img src={ImageLuxury} alt="" />
      <h1>Luxury</h1>
      <p>
        Cruise in the best car brands without the bloated prices. Enjoy the
        enhanced comfort of a luxury rental and arrive in style.
      </p>
      <button class="text-[#004241]">Learn More</button>
    </div>
  </div>
</main>
