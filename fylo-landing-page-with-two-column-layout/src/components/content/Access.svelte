<script lang="ts">
  import { validEmail } from '../../validEmail'
  let errorForm:boolean = true
  let email;
  const submit = () => {
    errorForm = validEmail(email)
  };
</script>

<div
  class="flex items-center lg:flex-row flex-col justify-between lg:text-left text-center"
>
  <div class="text-white">
    <h2>Get early access today</h2>
    <p class="max-w-[500px] mt-6">
      It only takes a minute to sign up and our free starter tier is extremely
      generous. If you have any questions, our support team would be happy to
      help you.
    </p>
  </div>
  <form
    on:submit|preventDefault={submit}
    class="flex flex-col items-center lg:items-start w-full max-w-[400px]  mt-8 lg:mt-0"
    action=""
  >
    <input
      type="text"
      class={`py-2 px-4 w-full rounded ${errorForm ? "border-none" : "border-[1px] border-red-500"}`}
      placeholder="email@example.com"
      bind:value={email}
    />
    <p class={`text-sm text-white mt-1 ${errorForm ? "hidden":"block"}`}>Please check your email.</p>
    <button
      class="bg-[#3065f8] w-full lg:w-fit  mt-3 text-sm font-bold rounded text-white py-3 px-6"
      type="submit">Get Started For Free</button
    >
  </form>
</div>
