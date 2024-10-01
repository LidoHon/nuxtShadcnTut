<script setup lang="ts">
import {h, onMounted, ref} from 'vue'
import { columns } from './columns';
const data = ref<any>([])

const generateRandomData = (numObjects: any) => {
    const statuses = ['pending', 'processing', 'completed']; 
    const emails = ['me@gmail.com', 'yi@yahoo.com', 'user@outlook.com']; 
    const randomData: any[] = []; 

    // Loop to generate 'numObjects' number of random objects
    for (let i = 0; i < numObjects; i++) {
        const id = Math.random().toString(36).substring(2, 8); // Generate random string id
        const amount = Math.floor(Math.random() * 500) + 50; // Generate random amount between 50 and 550
        const status = statuses[Math.floor(Math.random() * statuses.length)]; // Random status from the array
        const email = emails[Math.floor(Math.random() * emails.length)]; 
        randomData.push({ id, amount, status, email });
    }

    // Assign the generated randomData to data.value
    data.value = randomData;
    return randomData;
};
onMounted(() => {
    generateRandomData(10);
});

</script>

<template>
  <div>
    <div class="grid w-full gap-4">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>All ur transactions</p>
        <h1>Transactions</h1>
      </div>
      
    </header>
    <DataTable  :columns="columns" :data="data"/>
    </div>
  </div>
</template>