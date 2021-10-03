<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.row]">
      <p>#</p>
      <p>Date</p>
      <p>Category</p>
      <p>Cost</p>
    </div>
    <div :class="[$style.row]" v-for="(item,ind) in list" :key="ind">
      <p>{{ list.length-ind }}</p>
      <p>{{ item.date }}</p>
      <p>{{ item.category }}</p>
      <p>{{ item.cost }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsList",
  props:{
    list:Array
  }
}
</script>

<style module>
.wrapper{
  margin-top: 50px;
  min-height: 315px;
}
.row{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  border: 1px solid #737373;
  border-radius: 10px;
  background: #e5e5e5;
}
.row:nth-child(odd){
  background: #999;
}
</style>