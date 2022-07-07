<script lang="ts">
  import Image from "../../assets/images/illustration-2.svg";
  import Quote from "../../assets/images/icon-quotes.svg";
  import Avatar from "../../assets/images/avatar-testimonial.jpg";
  import ArrowIcon from "../../assets/images/icon-arrow.svg";
</script>

<div class="flex items-center lg:flex-row flex-col-reverse justify-between">
  <div class="lg:mr-8">
    <h1 class="text-center mt-12 lg:mt-0 lg:text-left">Stay productive, wherever you are</h1>
    <div class="mt-4 lg:mt-8 text-center lg:text-left max-w-[520px] lg:mx-0 mx-auto">
      <p class="">
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>
      <p class="my-4 ">
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required!
      </p>
    </div>
    <div class="w-fit mx-auto lg:mx-0">
      <button class="text-[#3c9f8f] border-b-[1px] py-1 border-b-[#3c9f8f]"
        >See how Fylo works <img
          class="inline"
          src={ArrowIcon}
          alt=""
        /></button
      >
    </div>
    <div
      class="bg-white mt-10 rounded-lg shadow-lg p-8 mx-auto lg:mx-0 max-w-[400px]"
    >
      <img src={Quote} alt="" />
      <p class="text-sm font-medium my-3 leading-6">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div class="flex items-center mt-4">
        <img class="w-[40px] rounded-full" src={Avatar} alt="" />
        <div class="ml-3">
          <h5 class="text-sm mb-1">Kyle Burton</h5>
          <h6 class="text-[10px]">Founder & CEO, Huddle</h6>
        </div>
      </div>
    </div>
  </div>
  <div class="max-w-[500px] xl:max-w-[700px]">
    <img class="w-full" src={Image} alt="" />
  </div>
</div>
