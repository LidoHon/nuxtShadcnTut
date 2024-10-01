<script setup>
const name = ref("Lido hon");
const description = ref("junior developer");
</script>

<template>
  <div class="m-2 p-2 border rounded flex items-center justify-start gap-2 cursor-pointer hover:bg-neutral-50 transition">
    <div
      class="rounded-full w-10 h-10 bg-green-500 flex items-center justify-center font-bold text-white"
    >
      {{ name[0] }}
    </div>
    <div>
      <p class="text-black text-sm font-bold m-0 leading-1">{{ name }}</p>
      <p class="m-0 text-sm">{{ description }}</p>
    </div>
  </div>
</template>
