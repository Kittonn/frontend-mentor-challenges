<script lang="ts">
  import Image from "./assets/images/image-header-desktop.jpg";
  interface dataI {
    id: number;
    count: string;
    type: string;
  }
  const data: dataI[] = [
    { id: 1, count: "10k+", type: "companies" },
    { id: 2, count: "314", type: "templates" },
    { id: 3, count: "12M+", type: "queries" },
  ];
</script>

<main class="min-h-screen flex justify-center items-center p-5 bg-[#090b1a]">
  <div class="grid grid-cols-1 max-w-[400px] md:grid-cols-2 bg-[#1b1938] rounded-2xl overflow-hidden md:max-w-[1200px]">
    <div class="p-8 md:p-12 lg:p-[4rem] flex flex-col justify-between">
      <div class="md:text-left text-center">
        <h1 class="text-3xl lg:text-4xl max-w-[400px]">
          Get <span>insights</span> that help your business grow.
        </h1>
        <p class="max-w-[380px] text-[15px] mt-6 ">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
      </div>
      <div class="flex text-center md:text-left flex-col md:flex-row max-w-[350px] justify-between mt-4">
        {#each data as item (item.id)}
          <div class="my-4 md:my-0">
            <h5 class="text-2xl">{item.count}</h5>
            <h6 class="text-sm">{item.type}</h6>
          </div>
        {/each}
      </div>
    </div>
    <div class="bg-[#aa5cdb] row-[1] md:col-[2]">
      <img src={Image} class="w-full h-full" alt="" />
    </div>
  </div>
</main>
