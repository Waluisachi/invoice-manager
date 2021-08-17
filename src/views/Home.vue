<template>
  <div class="container">
    <div class="wrapper">
      <div class="card" v-for="invoice in invoices" :key="invoice.number">
        <h2> <span class="name">Number</span> : {{ invoice.number }}</h2>
        <h2><span class="name">Client</span>: {{ invoice.client }}</h2>
        <h2><span class="name">Amount</span>: {{ invoice.amount }}</h2>
        <h2><span class="name">Status</span>: {{ invoice.status }}</h2>
        <div class="actions">

          <router-link :to="`/edit/${invoice.number}`"> <button type="button" class="btn btn-primary">Edit</button></router-link>
          <button type="button" class="btn btn-danger" @click="deleteInvoice(invoice.number)">Delete</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import invoicesData  from "../assets/invoices";

let invoices;

export default {
  setup() {
    if (localStorage.getItem("invoices")) {
      invoices = JSON.parse(localStorage.getItem("invoices"))
    } else {
      invoices= null;
    }
    console.log(invoices);

    const deleteInvoice = (number ) => {

      invoices.splice(invoices.findIndex(invoice => invoice.number == number ), 1);
      localStorage.setItem("invoices", JSON.stringify(invoices))
    }
    return { invoices: invoices, deleteInvoice};
  },

  name: "Invoices",
  components: {
    // Invoices,
  },
};
</script>

<style scoped>

* {
  font-family: 'Quicksand', sans-serif;
}
.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

}

.card {
  max-width: 500px;
  width: 100%;
  margin-bottom: 10px;
  margin: auto;
  display: block;
  grid-column: 1fr;
  grid-gap: 0.6rem;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.name {
  color: rgba(10, 201, 122, 1);
  font-weight: 400;
}

.btn {
  text-decoration: none;
  list-style: none;
}

.actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
