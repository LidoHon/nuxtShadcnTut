<script setup>
import { ref } from "vue";

const items = ref([
  {
    title: "Overview",
    path: "/",
    icon: "uit:create-dashboard",
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: "tdesign:undertake-transaction",
  },
  {
    title: "Accounts",
    path: "/accounts",
    icon: "fluent:person-accounts-24-filled",
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: "typcn:contacts",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: "flat-color-icons:settings",
  },
]);
</script>

<template>
  <div>
    <header
      class="flex items-center gap-2 p-4 hover:scale-[102%] transition cursor-pointer"
    >
      <Logo />
      <p class="font-bold text-black">Nuxt-Finance</p>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-2">
        <NuxtLink
          :href="item.path"
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center px-2 py-2 gap-2 transition rounded cursor-pointer hover:bg-neutral-100"
        >
          <!-- Render the Icon only if item.icon exists -->
          <Icon v-if="item.icon" :name="item.icon" color="black" />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
