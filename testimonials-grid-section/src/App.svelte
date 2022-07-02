<script lang="ts">
  import Image1 from "./assets/image-daniel.jpg";
  import Image2 from "./assets/image-jonathan.jpg";
  import Image3 from "./assets/image-jeanette.jpg";
  import Image4 from "./assets/image-patrick.jpg";
  import Image5 from "./assets/image-kira.jpg";
</script>

<main class="min-h-screen bg-[#ecf2f8] flex justify-center items-center p-5">
  <div class="max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div class="bg lg:col-[1/3] rounded-lg p-8">
      <div class="flex items-center">
        <div>
          <img class="img-profile mr-4" src={Image1} alt="" />
        </div>
        <div>
          <p class="text-gray">Daniel Clifford</p>
          <p class="text-light text-xs">Verified Graduate</p>
        </div>
      </div>

      <div>
        <h1 class="text-gray">
          I received a job offer mid-course, and the subjects I learned were
          current, if not more so, in the company I joined. I honestly feel I
          got every penny’s worth.
        </h1>
        <p class="text-light">
          “ I was an EMT for many years before I joined the bootcamp. I’ve been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I’ve successfully switched careers, working as
          a Software Engineer at a VR startup. ”
        </p>
      </div>
    </div>

    <div class="bg-[#48556A] rounded-lg p-8">
      <div class="flex items-center">
        <div>
          <img class="img-profile mr-4" src={Image2} alt="" />
        </div>
        <div>
          <p class="text-gray">Jonathan Walters</p>
          <p class="text-light text-xs">Verified Graduate</p>
        </div>
      </div>

      <div>
        <h1 class="text-gray">The team was very supportive and kept me motivated</h1>
        <p class="text-light">
          “ I started as a total newbie with virtually no coding skills. I now
          work as a mobile engineer for a big company. This was one of the best
          investments I’ve made in myself. ”
        </p>
      </div>
    </div>

    <div class="bg-white row-[5] md:row-[3] md:col-[1/3] lg:row-[1/3] lg:col-[4] rounded-lg p-8">
      <div class="flex items-center">
        <div>
          <img class="img-profile mr-4" src={Image3} alt="" />
        </div>
        <div>
          <p class="text-black">Kira Whittle</p>
          <p class="text-light text-xs">Verified Graduate</p>
        </div>
      </div>

      <div>
        <h1 class="text-black">Such a life-changing experience. Highly recommended!</h1>
        <p class="text-black">
          “ Before joining the bootcamp, I’ve never written a line of code. I
          needed some structure from professionals who can help me learn
          programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. The agile team
          project, in particular, was outstanding. It took my learning to the
          next level in a way that no tutorial could ever have. In fact, I’ve
          often referred to it during interviews as an example of my developent
          experience. It certainly helped me land a job as a full-stack
          developer after receiving multiple offers. 100% recommend! ”
        </p>
      </div>
    </div>

    <div class="bg-white rounded-lg p-8">
      <div class="flex items-center">
        <div>
          <img class="img-profile mr-4" src={Image4} alt="" />
        </div>
        <div>
          <p class="text-black">Jeanette Harmon</p>
          <p class="text-light text-xs">Verified Graduate</p>
        </div>
      </div>

      <div>
        <h1 class="text-black">An overall wonderful and rewarding experience</h1>
        <p class="text-black">
          “ Thank you for the wonderful experience! I now have a job I really
          enjoy, and make a good living while doing something I love. ”
        </p>
      </div>
    </div>

    <div class="bg-[#19212E] lg:col-[2/4] rounded-lg p-8">
      <div class="flex items-center">
        <div>
          <img class="img-profile mr-4" src={Image5} alt="" />
        </div>
        <div>
          <p class="text-gray">Patrick Abrams</p>
          <p class="text-light text-xs">Verified Graduate</p>
        </div>
      </div>

      <div>
        <h1 class="text-gray">
          Awesome teaching support from TAs who did the bootcamp themselves.
          Getting guidance from them and learning from their experiences was
          easy.
        </h1>
        <p class="text-light">
          “ The staff seem genuinely concerned about my progress which I find
          really refreshing. The program gave me the confidence necessary to be
          able to go out in the world and present myself as a capable junior
          developer. The standard is above the rest. You will get the personal
          attention you need from an incredible community of smart and amazing
          people. ”
        </p>
      </div>
    </div>
  </div>
</main>
