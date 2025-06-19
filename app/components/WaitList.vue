<template>
  <div class="min-h-[80vh] flex items-center justify-center bg-base-200 px-5">
<div class="text-center max-w-xl mx-auto text-base-content">
  <div class="flex justify-center mb-6">
    <NuxtLink to="#">
      <div class="btn btn-circle bg-primary bg-opacity-20 border-none text-primary hover:bg-primary hover:text-base-100">
        <span class="text-xl font-bold text-white">C</span>
      </div>
    </NuxtLink>
  </div>
  <h1 class="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
    Ready to Commit to Your Best Essay?
  </h1>
  <p class="text-lg text-base-content/70 mb-1">
    Join our waitlist for early access, exclusive writing tips, and launch updates.
  </p>
  <p class="text-lg text-base-content/70 mb-8">
    Be among the first to experience intelligent essay editing.
  </p>
  <div class="flex flex-col items-center gap-4">
    <input
      type="email"
      placeholder="Enter your email address"
      class="input input-bordered input-md w-full max-w-md"
    />
    <button class="btn btn-primary w-full max-w-md">
      Join Waitlist
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
  <p class="text-xs text-base-content/60 mt-6">
    We respect your privacy. No spam, ever. <a href="#" class="link">Unsubscribe</a> at any time.
  </p>
</div>
</div>
</template>