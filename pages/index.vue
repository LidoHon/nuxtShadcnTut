<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const loading = ref(false);
const data = ref([]);

let currentCategory = ref("today");

// Generate random data
const generateRandomData = (number = 7) => {
  let values = [];
  for (let i = 0; i < number; i++) {
    values.push(Math.floor(Math.random() * 100));
  }
  data.value = values;
};

const setCategory = (e: any) => {
  let v = e.target.innerText.toLowerCase().trim();
  currentCategory.value = v;

  switch (v) {
    case "today":
      generateRandomData(24); // 24 hours
      break;
    case "week":
      generateRandomData(7); // 7 days
      break;
    case "month":
      generateRandomData(31); // 31 days
      break;
    case "year":
      generateRandomData(12); // 12 months
      break;
    default:
      generateRandomData(24); // Default to today
      break;
  }
};

const cards = [
  {
    title: "sales",
    progression: 12,
    amount: 84.44,
    label: "view sales",
    description: "sales od september 2024",
    icon: "carbon:sales-ops",
  },
  {
    title: "Refunds",
    progression: 8,
    amount: 84.44,
    label: "view refunds",
    description: "payouts of this week",
    icon: "heroicons-outline:receipt-refund",
  },
  {
    title: "Payouts",
    progression: 14,
    amount: 899.44,
    label: "view payouts",
    description: "sales od september 2024",
    icon: "mdi:account-payment-outline",
  },
];

// When component is mounted, generate initial data
onMounted(() => {
  generateRandomData(24);
});
</script>

<template>
  <div class="grid w-full gap-4">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>Hey, welcome back Lido</p>
        <h1>Dashboard</h1>
      </div>
      <ProductNew/>
    </header>

    <main class="grid gap-2">
      <Tabs default-value="today" @click="setCategory">
        <TabsList class="max-w-[400px]">
          <TabsTrigger value="today"> Today </TabsTrigger>
          <TabsTrigger value="week"> This week </TabsTrigger>
          <TabsTrigger value="month"> This month </TabsTrigger>
          <TabsTrigger value="year"> This year </TabsTrigger>
        </TabsList>

        <TabsContent value="today">
          <Chart
            v-if="data.length > 0"
            :currentCategory="currentCategory"
            :data="data"
          />
        </TabsContent>
        <TabsContent value="week">
          <Chart v-if="data.length > 0" :data="data" />
        </TabsContent>
        <TabsContent value="month">
          <Chart v-if="data.length > 0" :data="data" />
        </TabsContent>
        <TabsContent value="year">
          <Chart v-if="data.length > 0" :data="data" />
        </TabsContent>
      </Tabs>
    </main>

    <footer>
      <div class="grid lg:grid-cols-3 gap-4">
        <Card v-for="(items, index) in cards" :key="index" :card="items"></Card>
      </div>
    </footer>
  </div>
</template>
