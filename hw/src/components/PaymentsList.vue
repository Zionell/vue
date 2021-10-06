<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.row]">
      <p>#</p>
      <p>Date</p>
      <p>Category</p>
      <p>Cost</p>
    </div>
    <div :class="[$style.row]" v-for="(item,ind) in getRenderPage" :key="ind">
      <p>{{ ind + 1 }}</p>
      <p>{{ item.date }}</p>
      <p>{{ item.category }}</p>
      <p>{{ item.cost }}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "PaymentsList",
  props: {
    pageLength: Number
  },
  data() {
    return {
      page: 1,
    }
  },
  computed: {
    ...mapGetters(['getPaymentsList']),
    checkPageNumber(){
      return  +this.$route.params.page
    },
    getRenderPage() {
      let start = ( this.checkPageNumber-1) * this.pageLength;
      let end = start + this.pageLength;
      return this.getPaymentsList.slice(start, end)
    }
  },
  mounted() {
    this.page = +this.$route.params.page
  }
}
</script>

<style module>
.wrapper {
  margin-top: 50px;
  min-height: 315px;
}

.row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid #737373;
  border-radius: 10px;
  background: #e5e5e5;
}

.row:nth-child(odd) {
  background: #999;
}
</style>