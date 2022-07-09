<script lang="ts">
  import Logo from './assets/images/logo.svg'
  import MockUp from "./assets/images/illustration-mockups.svg"
  import Grow from './assets/images/illustration-grow-together.svg'
  import Flow from './assets/images/illustration-flowing-conversation.svg'
  import Users from './assets/images/illustration-your-users.svg'
  import LogoWhite from "./assets/images/logoWhite.svg"
</script>
<div class="bg-[url(./assets/images/bg-hero-desktop.svg)] bg-[#ebfbff] bg-no-repeat">
  <div class="container p-5 mx-auto">
    <div class="flex items-center justify-between mt-6">
      <img src={Logo} alt="">
      <button class="bg-white py-3 px-12 shadow-md rounded-full text-base">Try It Free</button>
    </div>
    <div class="flex justify-between items-center my-12">
      <div>
        <h1 class="max-w-[400px] leading-[3.75rem]">Build The Community Your Fans Will Love</h1>
        <p class="mt-9 mb-8 max-w-[520px]">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
        <button class="text-sm bg-[#ff52bf] rounded-full text-white py-4 px-[4rem]">Get Started For Free</button>
      </div>
      <div class="max-w-[700px]">
        <img class="w-full" src={MockUp} alt="">
      </div>
    </div>
  </div>
</div>
<div class="container p-5 mx-auto">
  <div>
    <div class="card">
      <div>
        <h2>Grow Together</h2>
        <p class="card-para"> Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
      </div>
      <div class="card-img"><img src={Grow} alt=""></div>
    </div>
    <div class="card">
      <div>
        <h2>Flowing Conversations</h2>
        <p class="card-para">You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
      </div>
      <div class="card-img"><img src={Flow} alt=""></div>
    </div>
    <div class="card">
      <div>
        <h2>Your Users</h2>
        <p class="card-para">It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
      </div>
      <div class="card-img"><img src={Users} alt=""></div>
    </div>
  </div>
</div>
<div class="bg-form">
  <div class="container mx-auto p-5">
    <div class="bg-red-100 p-[3.5rem] shadow-xl">
      <h1 class="text-center">Ready To Build Your Community?</h1>
      <button class="bg-[#ff52bf] text-white py-4 px-[4rem] rounded-full mt-12 block mx-auto">Get Started For Free</button>
    </div>
  </div>
</div>
<div class="bg-[#00252e]">
  <div class="container p-5 mx-auto">
    <div><img src={LogoWhite} alt=""></div>
    <div></div>
    <div>
      <h6></h6>
    </div>
  </div>
</div>