<template>
  <div class="container">
    <Invoices />
  </div>
</template>

<script>
// @ is an alias to /src
import Invoices from "@/components/Invoices.vue";
// import invoices  from '../assets/invoices';
// invoices.forEach(invoice => console.log(invoice));
export default {
  name: "Invoices",
  components: {
    Invoices,
  },
};
</script>
