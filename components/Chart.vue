<script setup>
import { ref, computed, onMounted } from 'vue';  // Ensure you import necessary Vue functions

let props = defineProps(['currentCategory', 'data']);
let data = ref(props.data || []);  // Use ref() for reactivity
let currentCategory = ref(props.currentCategory || 'today');  // Use ref() for reactivity

const categories = ref({
  today: [
    "00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
    "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
    "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
  ],
  week: [
    "Sunday", "Monday", "Tuesday", "Wednesday", 
    "Thursday", "Friday", "Saturday"
  ],
  month: [],
  year: [
    "Jan", "Feb", "Mar", "April", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]
});

// Compute options for the Highchart
const options = computed(() => ({
  chart: {
    type: "line",
    animation: false,
  },
  legend: {
    enabled: false,
  },
  title: {
    text: "",
  },
  xAxis: {
    gridLineColor: "transparent",
    categories: categories.value[currentCategory.value] || [],  // Ensure it defaults to an empty array if not found
  },
  yAxis: {
    gridLineColor: "transparent",
    title: {
      text: "",
    },
  },
  plotOptions: {
    line: {
      marker: {
        enabled: false,
      },
      dataLabels: {
        enabled: false,
      },
      enableMouseTracking: true,
    },
  },
  series: [
    {
      name: "Random Data",
      lineWidth: 4,
      color: {
        linearGradient: {},
        stops: [
          [0, "rgba(252, 176, 69, 1)"],
          [0.23, "rgba(39, 76, 245, 0.8)"],
          [0.33, "rgba(253, 29, 29, 1)"],
          [0.66, "rgba(131, 58, 180, 1)"],
          [1, "rgba(29, 217, 83, 1)"],
        ],
      },
      data: data.value,
    },
  ],
}));

const generateMonth = () => {
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth() + 1;  // Months are 0-indexed in JS
  let currentYear = currentDate.getFullYear();

  const generateMonthDates = () => {  // Fixed function declaration
    let monthDates = [];
    let daysInMonth = new Date(currentYear, currentMonth, 0).getDate();  // Get days in current month

    for (let i = 1; i <= daysInMonth; i++) {
      let dayString = ('0' + i).slice(-2);
      let monthString = ('0' + currentMonth).slice(-2);  // Fixed to correctly format month
      monthDates.push(monthString + '/' + dayString);
    }
    return monthDates;    
  };

  let month = generateMonthDates();
  categories.value = { ...categories.value, month };  // Correctly update the categories
  return month;
};

onMounted(() => {
  generateMonth();
});
</script>

<template>
  <div class="p-4 rounded-lg"> 
    <highchart v-if="data.length > 0" :options="options" />
  </div>
</template>
