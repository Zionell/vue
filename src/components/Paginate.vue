<template>
  <div :class="[$style.wrapper]">
    <router-link
        :class="[$style.page]"
        v-for="page in getCountPages"
        :key="page"
        :to="'/dashboard/'+page"
    >
      {{ page }}
    </router-link>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Paginate",
  props: {
    pageLength: Number
  },
  computed: {
    ...mapGetters(['getPaymentsList']),
    getCountPages(){
      return Math.ceil(this.getPaymentsList.length/this.pageLength)
    }
  }
}
</script>

<style module>
.wrapper {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page {
  padding: 10px 15px;
  border-radius: 100%;
  border: 1px solid cadetblue;
  background: cadetblue;
  transition: 0.2s linear;
  color: #000;
  text-decoration: none;
}

.page:hover {
  color: cadetblue;
  background: #ffffff;
}
:global(.router-link-active) {
  background: #ffffff;
}
</style>