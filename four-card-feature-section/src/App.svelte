<script lang="ts">
  import IconSuper from "./assets/images/icon-supervisor.svg";
  import IconBuilder from "./assets/images/icon-team-builder.svg";
  import IconCal from "./assets/images/icon-calculator.svg";
  import IconKarma from "./assets/images/icon-karma.svg";
</script>

<main class="bg-[#fafafa] min-h-screen p-5 flex flex-col items-center">
  <section class="text-center">
    <h1 class="font-extralight mt-12 mb-2">Reliable, efficient delivery</h1>
    <h1 class="text-[#4c4e61]">Powered by Technology</h1>
    <p class="font-normal text-sm md:text-base max-w-[300px] md:max-w-[550px] mt-6">
      Our Artificial Intelligence powered tools use millions of project data
      points to ensure that your project is successful
    </p>
  </section>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[350px] md:max-w-[800px] lg:max-w-[1100px] my-12">
    <div class="lg:row-span-2 bg-white lg:self-center shadow-lg border-t-[#45d3d3] border-t-4 p-6 rounded-md">
      <h3>Supervisor</h3>
      <p>Monitors activity to identify project roadblocks</p>
      <img src={IconSuper} alt="" />
    </div>
    <div class="bg-white border-t-4 border-t-[#ea5353] shadow-lg p-6 rounded-md">
      <h3>Team Builder</h3>
      <p>
        Scans our talent network to create the optimal team for your project
      </p>
      <img src={IconBuilder} alt="" />
    </div>
    <div class="bg-white lg:row-span-2 lg:self-center border-t-4 shadow-lg border-t-[#549ef2] p-6 rounded-md">
      <h3>Calculator</h3>
      <p>Uses data from past projects to provide better delivery estimates</p>
      <img src={IconCal} alt="" />
    </div>
    <div class="bg-white border-t-4 border-t-[#fcaf4a] shadow-lg p-6 rounded-md">
      <h3>Karma</h3>
      <p>Regularly evaluates our talent to ensure quality</p>
      <img src={IconKarma} alt="" />
    </div>
  </section>
</main>
