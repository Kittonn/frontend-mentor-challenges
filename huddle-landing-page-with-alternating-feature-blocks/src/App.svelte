<script lang="ts">
  import Logo from "./assets/images/logo.svg";
  import MockUp from "./assets/images/illustration-mockups.svg";
  import Grow from "./assets/images/illustration-grow-together.svg";
  import Flow from "./assets/images/illustration-flowing-conversation.svg";
  import Users from "./assets/images/illustration-your-users.svg";
  import LogoWhite from "./assets/images/logoWhite.svg";
  import LocationIcon from "./assets/images/icon-location.svg";
  import EmailIcon from "./assets/images/icon-email.svg";
  import PhoneIcon from "./assets/images/icon-phone.svg";
  import {
    FacebookFBrand,
    TwitterBrand,
    InstagramBrand,
  } from "svelte-awesome-icons";
</script>

<div
  class="bg-[url(./assets/images/bg-hero-desktop.svg)] bg-[#ebfbff] bg-no-repeat"
>
  <div class="container p-5 mx-auto">
    <div class="flex items-center justify-between mt-6">
      <div class="max-w-[150px] mr-8 md:max-w-[300px]">
        <img src={Logo} alt="" />
      </div>
      <button class="bg-white py-3 md:px-12 px-8 shadow-md rounded-full text-base"
        >Try It Free</button
      >
    </div>
    <div class="flex justify-between flex-col lg:flex-row items-center my-12">
      <div class="lg:mr-12">
        <h1 class="max-w-[400px] leading-[3rem] lg:leading-[3.75rem] text-center mx-auto lg:text-left lg:mx-0">
          Build The Community Your Fans Will Love
        </h1>
        <p class="mt-9 mb-8 max-w-[520px] text-center lg:text-left mx-auto lg:mx-0 text-lg">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button
          class="text-sm bg-[#ff52bf] hover:bg-pink-300 rounded-full text-white py-4 block mx-auto lg:mx-0 px-[4rem]"
          >Get Started For Free</button
        >
      </div>
      <div class="max-w-[700px] mt-8 lg:mt-0">
        <img class="w-full" src={MockUp} alt="" />
      </div>
    </div>
  </div>
</div>
<div class="container p-5 mx-auto">
  <div>
    <div class="card">
      <div class="lg:mr-12">
        <h2>Grow Together</h2>
        <p class="card-para">
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>
      </div>
      <div class="card-img"><img src={Grow} alt="" /></div>
    </div>
    <div class="card">
      <div class="lg:mr-12">
        <h2>Flowing Conversations</h2>
        <p class="card-para">
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
      <div class="card-img"><img src={Flow} alt="" /></div>
    </div>
    <div class="card">
      <div class="lg:mr-12">
        <h2>Your Users</h2>
        <p class="card-para">
          It takes no time at all to integrate Huddle with your app's
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </p>
      </div>
      <div class="card-img"><img src={Users} alt="" /></div>
    </div>
  </div>
</div>
<div class="bg-form">
  <div class="container mx-auto p-5">
    <div class="bg-white rounded-xl p-8 md:p-[3.5rem] shadow-2xl">
      <h1 class="text-center text-2xl">Ready To Build Your Community?</h1>
      <button
        class="bg-[#ff52bf] hover:bg-pink-300 text-white py-4 px-[4rem] rounded-full mt-8 md:mt-12 block mx-auto"
        >Get Started For Free</button
      >
    </div>
  </div>
</div>
<div class="bg-[#00252e] text-white">
  <div class="container p-5 mx-auto">
    <div class="mt-12"><img src={LogoWhite} alt="" /></div>
    <div class="flex md:flex-row flex-col justify-between my-8">
      <div class="mr-4">
        <div class="icon-para">
          <img class="p-1 mr-5" src={LocationIcon} alt="" />
          <p class="max-w-[350px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div class="icon-para">
          <img class="p-1 mr-3" src={PhoneIcon} alt="" />
          <p>+1-543-123-4567</p>
        </div>
        <div class="icon-para">
          <img class="p-1 mr-3" src={EmailIcon} alt="" />
          <p>example@huddle.com</p>
        </div>
      </div>
      <div class="mr-4">
        <p class="mb-4">About Us</p>
        <p class="mb-4">What We Do</p>
        <p class="mb-4">FAQ</p>
      </div>
      <div class="mr-4">
        <p class="mb-4">Career</p>
        <p class="mb-4">Blog</p>
        <p class="mb-4">Contact Us</p>
      </div>
      <div class="flex justify-center md:justify-start">
        <FacebookFBrand class="icon" />
        <TwitterBrand class="icon" />
        <InstagramBrand class="icon" />
      </div>
    </div>
    <div class="mb-8 ">
      <h6 class="text-center md:text-right">© Copyright 2018 Huddle. All rights reserved.</h6>
    </div>
  </div>
</div>
