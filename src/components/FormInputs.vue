<template>
  <v-container>
    <v-card class="text-left pa-8">
      <v-text-field type="date" v-model="date" label="Choose date"></v-text-field>
      <v-select v-model="category" label="Choose category" :items="categories"></v-select>
      <v-text-field v-model.number="cost" type="number" min="0" label="Add cost"></v-text-field>
      <v-btn
          rounded
          class="px-10"
          color="primary"
          @click="add"
      >
        Save
      </v-btn>
    </v-card>
  </v-container>
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
    ...mapGetters(['getCategory', 'getPaymentsList']),
    categories() {
      return this.getCategory
    }
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