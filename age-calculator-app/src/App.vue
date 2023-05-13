<script setup lang="ts">
import { reactive } from "vue";

const birthDate = reactive({
  day: "",
  month: "",
  year: "",
});
const age = reactive({
  days: 0,
  months: 0,
  years: 0,
});

const calculatorAge = () => {
  const today = new Date();
  const birthDateValue = new Date(
    +birthDate.year,
    +birthDate.month - 1,
    +birthDate.day
  );

  let days = today.getDate() - birthDateValue.getDate();
  let months = today.getMonth() - birthDateValue.getMonth();
  let years = today.getFullYear() - birthDateValue.getFullYear();

  if (days < 0) {
    months--;
    const prevMonthDate = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      0
    );
    days += prevMonthDate.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  age.days = days;
  age.months = months;
  age.years = years;
};
</script>

<template>
  <main>
    <div>
      <div>
        <label>DAY</label>
        <input type="text" v-model="birthDate.day" placeholder="DD" />
      </div>
      <div>
        <label>MONTH</label>
        <input type="text" v-model="birthDate.month" placeholder="MM" />
      </div>
      <div>
        <label>YEAR</label>
        <input type="text" v-model="birthDate.year" placeholder="YYYY" />
      </div>
    </div>
    <button @click="calculatorAge">
      <img src="/images/icon-arrow.svg" alt="arrow icon" />
    </button>
    <div>
      <h1>{{ age.years }}years</h1>
      <h1>{{ age.months }}months</h1>
      <h1>{{ age.days }}days</h1>
    </div>
  </main>
</template>
