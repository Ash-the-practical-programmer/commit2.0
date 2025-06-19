<template>
<footer class="bg-[#1B2735] text-[#A0AEC0] py-8">
  <div class="text-center text-sm">
    <p class="mb-4">
      © 2025 Commit. All Rights Reserved.
    </p>
    <div class="flex justify-center space-x-4 mb-4">
      <NuxtLink to="#" class="hover:underline text-[#A0AEC0]">Privacy Policy</NuxtLink>
      <span class="text-[#A0AEC0]">|</span>
      <NuxtLink to="#" class="hover:underline text-[#A0AEC0]">Terms of Service</NuxtLink>
      <span class="text-[#A0AEC0]">|</span>
      <NuxtLink to="#" class="hover:underline text-[#A0AEC0]">Contact</NuxtLink>
    </div>
    <div class="flex justify-center space-x-6 mt-4 text-[#A0AEC0] text-xl">
      <NuxtLink to="#" aria-label="Chat icon" class="hover:text-white">
        <Icon name="ri:discord-fill" />
      </NuxtLink>
      <NuxtLink to="#" aria-label="LinkedIn icon" class="hover:text-white">
        <Icon name="ri:linkedin-fill" />
      </NuxtLink>
      <NuxtLink to="#" aria-label="Twitter icon" class="hover:text-white">
        <Icon name="ri:twitter-x-line" />
      </NuxtLink>
      <NuxtLink to="#" aria-label="YouTube icon" class="hover:text-white">
        <Icon name="lucide:youtube" class="fab fa-youtube" />
      </NuxtLink>
    </div>
  </div>
</footer>
</template>