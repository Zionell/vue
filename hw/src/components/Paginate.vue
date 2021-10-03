<template>
  <div :class="[$style.wrapper]">
    <button
        :class="[$style.page]"
        v-for="page in getCountPages"
        :key="page"
        @click="changePage(page)"
    >{{ page }}
    </button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Paginate",
  computed:{
    ...mapGetters(['getCountPages'])
  },
  methods:{
    ...mapMutations(['setNewRenderPage']),
    changePage(pageNumber){
      this.setNewRenderPage( pageNumber)
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
}
.page:hover {
  color: cadetblue;
  background: #ffffff;
}
</style>