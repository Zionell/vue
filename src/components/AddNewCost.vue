<template>
  <div>
    <v-layout
        justify-space-around
    >
      <v-btn
          color="primary"
          elevation="2"
          large
          x-large
          to="/add/payment/Food?value=200"
      >
        Food: 200
      </v-btn>
      <v-btn
          color="primary"
          elevation="2"
          large
          x-large
          to="/add/payment/Transport?value=50"
      >
        Transport: 50
      </v-btn>
      <v-btn
          color="primary"
          elevation="2"
          large
          x-large
          to="/add/payment/Education?value=2000"
      >
        Education: 2000
      </v-btn>
    </v-layout>
      <v-row
        class="d-flex justify-center mt-10"
      >
        <v-btn
            color="primary"
            elevation="2"
            large
            x-large
            @click="showForm"
        >
          ADD NEW COST
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <FormInputs
            @showForm="addForm=true"
            v-show="addForm"
        />
      </v-row>
  </div>
</template>

<script>
import FormInputs from "./FormInputs";

export default {
  name: "AddNewCost",
  components: {
    FormInputs
  },
  data() {
    return {
      addForm: false,
    }
  },
  methods: {
    showForm() {
      this.addForm = !this.addForm
    },
  },

=======
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
