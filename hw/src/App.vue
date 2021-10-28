<template>
  <div id="app">
    <header>
      <h1>My personal costs</h1>
    </header>
    <main>
      <AddNewCost/>
      <PaymentsList/>
      <Paginate/>
    </main>
  </div>
</template>

<script>
import PaymentsList from "./components/PaymentsList";
import AddNewCost from "./components/AddNewCost";
import Paginate from "./components/Paginate";
import {mapActions} from "vuex";

export default {
  name: 'App',
  components: {
    PaymentsList,
    AddNewCost,
    Paginate
  },
  data() {
    return {
    }
  },
  computed:{
  },
  methods:{
    ...mapActions(['fetchData','fetchCategory'])
  },
  beforeMount() {
    this.fetchData(),
    this.fetchCategory()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 900px;
  margin: 60px auto;
}
</style>
