<template>
  <div>
    <header>
      <h1>My personal costs</h1>
    </header>
    <main>
      <AddNewCost/>
      <PaymentsList :pageLength="pageLength"/>
      <Paginate :pageLength="pageLength"/>
    </main>
  </div>
</template>

<script>
import PaymentsList from "../components/PaymentsList";
import AddNewCost from "../components/AddNewCost";
import Paginate from "../components/Paginate";
import {mapActions} from "vuex";

export default {
  name: "dashboard",
  data() {
    return {
      pageLength: 5
    }
  },
  components: {
    PaymentsList,
    AddNewCost,
    Paginate
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategory'])
  },
  beforeMount() {
    this.fetchData()
    this.fetchCategory()
  }
}
</script>

<style scoped>

</style>