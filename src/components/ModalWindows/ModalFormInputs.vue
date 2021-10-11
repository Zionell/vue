<template>
  <div
      :class="[$style.formWrapper]">
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
    <button :class="[$style.button]" @click="add">Save</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "FormInputs",
  props: {
    data: Object
  },
  data() {
    return {
      id: 0,
      date: '',
      category: '',
      cost: 0,
    }
  },
  computed: {
    ...mapGetters(['getCategory', 'getPaymentsList'])
  },
  methods: {
    ...mapMutations(['editNewCost']),
    add() {
      let {date, category, cost, data} = this;
      let editData = {
        date: date,
        category: category,
        cost: cost,
      }
      this.editNewCost({editData, data})
    },
  },
  mounted() {
    this.date = this.data.date;
    this.category = this.data.category;
    this.cost = this.data.cost;
  }
}
</script>

<style module>
.formWrapper {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
}

input, select {
  width: 150px;
  border: 1px solid green;
  border-radius: 5px;
  padding: 3px;
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

.button:hover {
  background: #ffffff;
  color: cadetblue;
}
</style>