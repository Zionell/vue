<template>
  <div :class="[$style.wrapper]">
    <button
      @click="showForm"
    >Edit</button>
    <button
      @click="deleteItem"
    >Delete</button>
  </div>
</template>

<script>
export default {
  name: "PopupWindow",
  methods:{
    showForm(){

    },
    deleteItem(){

    }
  }
}
</script>

<style module>
.wrapper{
  background: rgba(0,0,0,.3);
}
</style>