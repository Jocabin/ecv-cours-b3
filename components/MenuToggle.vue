<script setup>
const open = useState("open", () => false);
</script>

<template>
  <button class="focus:outline-none" @click="open = !open">
    <!-- <span class="sr-only">Open main menu</span>
    <div
      class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <span
        aria-hidden="true"
        class="block absolute h-0.5 w-5 bg-black dark:bg-white transform transition duration-500 ease-in-out"
        :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
      ></span>
      <span
        aria-hidden="true"
        class="block absolute h-0.5 w-5 bg-black dark:bg-white transform transition duration-500 ease-in-out"
        :class="{ 'opacity-0': open }"
      ></span>
      <span
        aria-hidden="true"
        class="block absolute h-0.5 w-5 bg-black dark:bg-white transform transition duration-500 ease-in-out"
        :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
      ></span>
    </div> -->
    <svg
      v-if="!open"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      class="h-8 w-8"
    >
      <path
        d="M4 6H20M4 12H20M4 18C5.36683 18 6.13317 18 7.5 18C8.86683 18 11 18 11 18"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>

    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="w-8 h-8"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  </button>
</template>
