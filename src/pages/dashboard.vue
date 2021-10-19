<template>
  <v-container fluid>
    <v-row>
        <header>
          <h1 class="font-weight-black text-h1 ma-10">My personal costs</h1>
        </header>
    </v-row>
    <v-row>
      <v-col>
          <AddNewCost/>
          <PaymentsList :pageLength="pageLength"/>
          <Paginate :pageLength="pageLength"/>
      </v-col>
      <v-col>
        <Diagram :class="[$style.diagram]"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PaymentsList from "../components/PaymentsList";
import AddNewCost from "../components/AddNewCost";
import Paginate from "../components/Paginate";
import {mapActions} from "vuex";
import Diagram from "../components/Diagram";

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
    Paginate,
    Diagram
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

<style module>
.diagram{
  width: 350px;
  margin: 0 auto;
}
</style>