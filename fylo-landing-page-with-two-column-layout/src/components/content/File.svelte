<script lang="ts">
  import Image from "../../assets/images/illustration-1.svg";
  import { validEmail } from "../../validEmail";
  let errorForm: boolean = true;
  let email;
  const submit = () => {
    errorForm = validEmail(email);
  };
</script>

<div class="flex lg:flex-row flex-col-reverse items-center justify-between">
  <div class="lg:mr-8 lg:text-left text-center">
    <h1 class="max-w-[550px] md:leading-[3.5rem] mx-auto lg:mx-0 lg:mt-0 mt-12">
      All your files in one secure location, accessible anywhere.
    </h1>
    <p class="text-lg max-w-[600px] my-4">
      Fylo stores your most important files in one secure location. Access them
      wherever you need, share and collaborate with friends, family, and
      co-workers.
    </p>
    <form
      on:submit|preventDefault={submit}
      class="max-w-[400px] lg:max-w-[600px] mx-auto lg:mx-0 lg:flex lg:items-start"
      action=""
    >
      <div class="lg:mr-4 ">
        <input
          class={`border-[1px] ${errorForm ? "border-black" : "border-red-500"} my-2 py-2 px-4 lg:max-w-[300px] rounded w-full`}
          type="text"
          placeholder="Enter your email..."
          bind:value={email}
        />
        <p class={`text-sm text-red-600 ${errorForm ? "hidden" : "block"}`}>
          Please check your email.
        </p>
      </div>
      <button
        type="submit"
        class="font-bold text-white my-2  w-full lg:w-fit bg-[#3065f8] rounded text-sm py-3 px-8"
        >Get Started</button
      >
    </form>
  </div>
  <div class="max-w-[500px] xl:max-w-[700px]">
    <img class="w-full" src={Image} alt="" />
  </div>
</div>
