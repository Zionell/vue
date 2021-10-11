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
    <button :class="[$style.button]" @click="add">Save</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "FormInputs",
  data() {
    return {
      id: 0,
      date: '',
      category: '',
      cost: 0,
      oldData: 0
    }
  },
  computed: {
    ...mapGetters(['getCategory', 'getPaymentsList'])
  },
  methods: {
    ...mapMutations(['setNewCost']),
    add() {
      let {date, category, cost, oldData} = this;
      let data = {
        date: date,
        category: category,
        cost: cost
      }
      this.setNewCost({data, oldData});
    },
  },
  watch: {
    $route(to) {
      if (to.name === 'AddPayment') {
        let fullDate = new Date();
        this.date = fullDate.getFullYear() + '-' + (fullDate.getMonth() + 1) + '-' + fullDate.getDate();
        this.category = to.params.pathMatch;
        this.cost = to.query.value;
        this.add();
        this.$emit("showForm")
        this.$router.push({path: '/dashboard/1'}).catch(() => {
        })
      } else if (to.name === 'EditPayment') {
        this.oldData = to.params.item;
        this.date = to.params.item.date;
        this.category = to.params.item.category;
        this.cost = to.params.item.cost;
        this.$emit("showForm")
        this.$router.push({path: `${to.params.page}`}).catch(() => {
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

.button:hover {
  background: #ffffff;
  color: cadetblue;
}
</style>