<template>
  <div id="app">
    <header>
      <h1>My personal costs</h1>
    </header>
    <main>
      <AddNewCost @addCost="addCost"/>
      <PaymentsList :list="showPage"/>
      <Paginate @paginate="changePage" :countPages="countPages"/>
    </main>
  </div>
</template>

<script>
import PaymentsList from "./components/PaymentsList";
import AddNewCost from "./components/AddNewCost";
import Paginate from "./components/Paginate";

export default {
  name: 'App',
  components: {
    PaymentsList,
    AddNewCost,
    Paginate
  },
  data() {
    return {
      paymentsList: [
        {
          'id': 1,
          'date': '12.02.2021',
          'category': 'Food',
          'cost': 100
        }, {
          'id': 2,
          'date': '25.04.2021',
          'category': 'Transport',
          'cost': 500
        }, {
          'id': 3,
          'date': '08.08.2021',
          'category': 'Clothing',
          'cost': 2500
        }, {
          'id': 4,
          'date': '13.05.2020',
          'category': 'Restaurant',
          'cost': 3000
        }, {
          'id': 5,
          'date': '12.02.2021',
          'category': 'Food',
          'cost': 100
        }, {
          'id': 6,
          'date': '25.04.2021',
          'category': 'Transport',
          'cost': 500
        }, {
          'id': 7,
          'date': '08.08.2021',
          'category': 'Clothing',
          'cost': 2500
        }, {
          'id': 8,
          'date': '13.05.2020',
          'category': 'Restaurant',
          'cost': 3000
        }, {
          'id': 9,
          'date': '12.02.2021',
          'category': 'Food',
          'cost': 100
        }, {
          'id': 10,
          'date': '25.04.2021',
          'category': 'Transport',
          'cost': 500
        }, {
          'id': 11,
          'date': '08.08.2021',
          'category': 'Clothing',
          'cost': 2500
        }, {
          'id': 12,
          'date': '13.05.2020',
          'category': 'Restaurant',
          'cost': 3000
        },
      ],
      pageSize: 5,
      start: 0,
      end: 5
    }
  },
  computed:{
    countPages() {
      const {paymentsList, pageSize} = this
      return Math.ceil(paymentsList.length / pageSize)
    },
    showPage(){
      const {paymentsList, start, end} = this
      return paymentsList.slice(start,end)
    }
  },
  methods:{
    addCost(data){
      this.paymentsList.splice(0,0, data)
    },
    changePage(pageNumber){
      this.start = pageNumber * this.pageSize,
      this.end = this.start + this.pageSize
    }
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
