<template>
  <div :class="[$style.formWrapper]">
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
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "FormInputs",
  data() {
    return {
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
    add() {
      let {date, category, cost} = this;
      this.setNewCost({date, category, cost})
    }
  },
  watch: {
    $route(to) {
      if (to.name === 'AddPayment') {
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
        this.$router.push({path: '/dashboard/1'}).catch(() => {
        })
      }
    }
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
</style>