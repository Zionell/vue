<template>
  <div :class="[$style.wrapper]">
    <button
        :class="[$style.page]"
        v-for="(page,ind) in countPages"
        :key="page"
        @click="changePage(ind)"
    >{{ page }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Paginate",
  props: {
    countPages: Number
  },
  methods:{
    changePage(pageNumber){
      this.$emit("paginate", pageNumber)
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