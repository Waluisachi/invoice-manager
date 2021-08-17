<template >
  <div class="container">
    <div class="title">
      Add New Invoice
    </div>
    <form @submit.prevent="create">
      <div class="mb-3 row">
        <label  class="col-sm-2 col-form-label">Client</label>
        <div class="col-sm-10">
          <input v-model="form.cient" type="text"  class="form-control">
        </div>
      </div>
      <div class="mb-3 row">
        <label  class="col-sm-2 col-form-label">Amount</label>
        <div class="col-sm-10">
          <input v-model="form.amount" type="text" class="form-control" >
        </div>
      </div>
      <div class="mb-3 row">
        <label  class="col-sm-2 col-form-label">Status</label>
        <div class="col-sm-10">
          <select v-model="selected" class="dropdown col-sm-10" name="">
            <option>Seect</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Draft</option>
          </select>
        </div>
      </div>
      <button type="submit" class="btn btn-success">Create Invoice</button>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";

  export default {
    setup() {
      const form = reactive({ client: '', amount: '', status: '' })

      const create = () => {
        if (localStorage.getItem("invoices")) {
          this.invoices = JSON.parse(localStorage.getItem("invoices"));
          this.invoices.push(form);
          localStorage.setItem("invoices", JSON.stringify(this.invoices));
        } else {
          localStorage.setItem("invoices", JSON.stringify(form));
        }
      }
      return { form , create};
    },
    name: "CreateInvoice",
  }
</script>

<style scoped>
*{
  box-sizing: border-box;
  }

body {
  /* background: linear-gradient(108deg, rgba(1, 147, 122, 1) 0%, rgba(10, 201, 122, 1) 100%); */
  padding: 0 10px;
  }

.container {
  margin-top: 15px;
  max-width: 500px;
  width: 100%;
  background: #ccc;
  margin: 20px auto;
  padding: 30px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

.container .title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 25px ;
  color: rgba(10, 201, 122, 1);
  text-transform: uppercase;
  text-align: center;
  }

.container .form {
  width: 100%;
  }

.container .form .input-group {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  }

.container .form .input-group label {
   width: 200px;
   color: #111;
   margin-right: 10px;
   font-size: 14px;
  }

.container .form .input-group .input,
.container .form .input-group .textarea {
  width: 100%;
  outline: none;
  border: 1px solid #01bf71;
  font-size: 15px;
  padding: 8px 10px;
  border-radius: 3px;
  transition: all 0.3s ease;
  }

.container .form .input-group .textarea {
  resize: none;
  height: 125px;
  }

.container .form .input-group .custom_selector {
  position: relative;
  width: 100%;
  height: 37px;
  }

.container .form .input-group .custom_selector select {
  -webkit-appearance: none;
  appearance: none;
  border: 1px solid #01bf71;
  width: 100%;
  height: 100%;
  padding: 8px 10px;
  border-radius: 3px;
  }

.container .form .input-group .custom_selector:before{
  content: "";
  position: absolute;
  top: 12px;
  right: 10px;
  border: 8px solid;
  border-color: #01bf71 transparent transparent transparent;
  pointer-events: none;
  }

.container .form .input-group .input:focus,
.container .form .input-group .textarea:focus,
.container .form .input-group select:focus  {
  border: 1px solid #fec107;
  }

.container .form .input-group p {
  font-size: 14px;
  color: #757575;
  }

.container .form .input-group .check {
  width: 15px;
  height: 15px;
  position: relative;
  display: block;
  cursor: pointer;
  }

.container .form .input-group .check input[type="checkbox"] {
  position: absolute;
  top:0;
  left: 0;
  opacity: 0;
  }

.container .form .input-group .check .checkmark {
   width: 15px;
   height: 15px;
   border: 1px solid #fec107;
   display: block;
   position: relative;
   background: green;
  }

.container .form .input-group .check .checkmark::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 2px;
  border: 2px solid;
  border-color: transparent transparent #fff #fff;
  }
</style>
