<template>
    <div class="landlord-dashboard">
      <property-management />
      <lease-management />
      <fee-management />
      <appointment-management />
      <income-statistics />
    </div>
  </template>
  
  <script>
  import PropertyManagement from './components/PropertyManagement.vue';
  import LeaseManagement from './components/LeaseManagement.vue';
  import FeeManagement from './components/FeeManagement.vue';
  import AppointmentManagement from './components/AppointmentManagement.vue';
  import IncomeStatistics from './components/IncomeStatistics.vue';
  
  export default {
    components: {
      PropertyManagement,
      LeaseManagement,
      FeeManagement,
      AppointmentManagement,
      IncomeStatistics
    }
  };
  </script>
  
  <style scoped>
  .landlord-dashboard .box-card {
    margin-bottom: 20px;
  }
  </style>
  