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
    <div :class="[$style.formWrapper]" v-show="addForm">
      <label>Choose date
        <input v-model="date" type="date" required="required">
      </label>
      <label>Choose category
        <select v-model="category" required="required">
          <option v-for="item in getCategory" :key="item">{{ item }}</option>
        </select>
      </label>
      <label>Add cost
        <input v-model="cost" type="number" min="0" required="required">
      </label>
      <button :class="[$style.button]" @click="add">Add</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "AddNewCost",
  data() {
    return {
      addForm: false,
      date: '',
      category: '',
      cost: 0,
    }
  },
  computed: {
    ...mapGetters(['getCategory'])
  },
  methods: {
    ...mapMutations(['setNewCost']),
    showForm() {
      this.addForm = !this.addForm
    },
    add() {
      let {date, category, cost} = this;
      this.setNewCost({date, category, cost})
    }
  },
  watch: {
    $route(to) {
      if(to.name==='AddPayment'){
        this.addForm = true;
        let fullDate = new Date();
        let arrDate = [];
        arrDate.push(fullDate.getDay());
        arrDate.push(fullDate.getMonth());
        arrDate.push(fullDate.getFullYear());
        this.date = arrDate.join(".");
        this.category = to.params.pathMatch;
        this.cost = to.query.value;
        this.add();
        this.$router.push({path: '/dashboard/1'}).catch(()=>{});
      }
    }
  }
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

.formWrapper {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
}

label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

input, select {
  width: 150px;
  border: 1px solid green;
  border-radius: 5px;
  padding: 3px;
}
</style>