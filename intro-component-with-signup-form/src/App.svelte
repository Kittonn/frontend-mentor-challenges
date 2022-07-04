<script lang="ts">
  import Icon from "./assets/images/icon-error.svg";
  let data = { firstname: "", lastname: "", email: "", password: "" };
  let checkValue = {
    firstname: true,
    lastname: true,
    email: true,
    password: true,
  };

  const submit = () => {
    checkValue.firstname = !data.firstname ? false : true;
    checkValue.lastname = !data.lastname ? false : true;
    checkValue.password = !data.password ? false : true;
    let re = /\S+@\S+\.\S+/;
    checkValue.email = re.test(data.email) ? true : false;
    if (
      checkValue.email &&
      checkValue.firstname &&
      checkValue.lastname &&
      checkValue.password
    ) {
      data = { firstname: "", lastname: "", email: "", password: "" };
    }
  };
</script>

<main class="min-h-screen flex justify-center items-center p-5">
  <div class="flex justify-center items-center md:flex-row flex-col ">
    <div class="text-white md:mr-12 my-[5rem] md:my-0 text-center md:text-left">
      <h1
        class="md:text-5xl text-2xl font-bold max-w-[250px] md:max-w-[450px] md:leading-[3.5rem]"
      >
        Learn to code by watching others
      </h1>
      <p class="font-semibold mt-8 max-w-[550px]">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
    <div class="max-w-[550px] w-full mb-[5rem] md:mb-0">
      <div class="bg-[#6055a5] mb-8 p-4 rounded-xl  text-white text-center">
        <h5>
          <span class="font-semibold">Try it free 7 days</span> then $20/mo. thereafter
        </h5>
      </div>
      <div class="bg-white p-6 md:p-10 rounded-xl">
        <div>
          <div class="relative">
            <input
              type="text"
              placeholder="First Name"
              bind:value={data.firstname}
              class={`${
                checkValue.firstname
                  ? "border-gray-400"
                  : "border-[#ff7a7a] border-2"
              }`}
            />
            <img
              class={`absolute right-5 top-4 ${
                checkValue.firstname ? "hidden" : "block"
              }`}
              src={Icon}
              alt=""
            />
          </div>
          <p
            class={`text-right text-xs font-medium italic mb-4 text-[#ff7a7a] mt-1 ${
              checkValue.firstname ? "invisible" : "visible"
            }`}
          >
            First Name can not be empty
          </p>
        </div>
        <div>
          <div class="relative">
            <input
              type="text"
              placeholder="Last Name"
              bind:value={data.lastname}
              class={`${
                checkValue.lastname
                  ? "border-gray-400"
                  : "border-2 border-[#ff7a7a]"
              }`}
            />
            <img
              class={`absolute right-5 top-4 ${
                checkValue.lastname ? "hidden" : "block"
              }`}
              src={Icon}
              alt=""
            />
          </div>
          <p
            class={`text-right text-xs font-medium italic mb-4 text-[#ff7a7a] mt-1 ${
              checkValue.lastname ? "invisible" : "visible"
            }`}
          >
            Last Name can not be empty
          </p>
        </div>
        <div>
          <div class="relative">
            <input
              type="email"
              placeholder="Email"
              bind:value={data.email}
              class={`${
                checkValue.email
                  ? "border-gray-400"
                  : "border-2 border-[#ff7a7a]"
              }`}
            />
            <img
              class={`absolute right-5 top-4 ${
                checkValue.email ? "hidden" : "block"
              }`}
              src={Icon}
              alt=""
            />
          </div>
          <p
            class={`text-right text-xs font-medium italic mb-4 text-[#ff7a7a] mt-1 ${
              checkValue.email ? "invisible" : "visible"
            }`}
          >
            Looks like this is not an email
          </p>
        </div>
        <div>
          <div class="relative">
            <input
              type="password"
              placeholder="Password"
              bind:value={data.password}
              class={`${
                checkValue.password
                  ? "border-gray-400"
                  : "border-2 border-[#ff7a7a]"
              }`}
            />
            <img
              class={`absolute right-5 top-4 ${
                checkValue.password ? "hidden" : "block"
              }`}
              src={Icon}
              alt=""
            />
          </div>
          <p
            class={`text-right text-xs font-medium italic mb-4 text-[#ff7a7a] mt-1 ${
              checkValue.password ? "invisible" : "visible"
            }`}
          >
            Password can not be empty
          </p>
        </div>
        <button
          on:click={submit}
          class="text-center bg-[#38cc8c] uppercase font-semibold text-white p-4 rounded-md w-full"
          >claim your free trial</button
        >
        <p class="text-center text-xs mt-3">
          By clicking the button, you are agreeing to our <span
            class="text-[#ff7a7a] font-bold">Terms and Services</span
          >
        </p>
      </div>
    </div>
  </div>
</main>
