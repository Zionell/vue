<template>
  <div>
    <div :class="[$style.wrapp]">
      <router-link
          :class="[$style.btnAdd]"
          to="/add/payment/Food?value=200"
      >
        Food: 200
      </router-link>
      <router-link
          :class="[$style.btnAdd]"
          to="/add/payment/Transport?value=50"
      >
        Transport: 50
      </router-link>
      <router-link
          :class="[$style.btnAdd]"
          to="/add/payment/Education?value=2000"
      >
        Education: 2000
      </router-link>
    </div>
    <button :class="[$style.button]" @click="showForm">
      ADD NEW COST +
    </button>
    <FormInputs
        @showFrom="addForm=true"
        v-show="addForm"
    />
  </div>
</template>

<script>
import FormInputs from "./FormInputs";

export default {
  name: "AddNewCost",
  components: {
    FormInputs
  },
  data() {
    return {
      addForm: false,
    }
  },
  methods: {
    showForm() {
      this.addForm = !this.addForm
    },
  },
}
</script>

<style module>
.wrapp {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
}

.btnAdd {
  background: cadetblue;
  color: #000;
  text-decoration: none;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  transition: 0.3s linear;
  border: 1px solid cadetblue;
}

.button {
  background: cadetblue;
  border: 1px solid cadetblue;
  padding: 10px 15px;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  transition: 0.3s linear;
}

.btnAdd:hover,
.button:hover {
  background: #ffffff;
  color: cadetblue;
}


label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}


</style>