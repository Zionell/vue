<template>
  <div>
    <button :class="[$style.button]" @click="showForm">
      ADD NEW COST +
    </button>
    <div :class="[$style.formWrapper]" v-show="addForm">
      <label>Choose date
        <input v-model="date" type="date" required="required">
      </label>
      <label>Choose category
        <select v-model="category" required="required">
          <option v-for="item in getCategory" :key="item">{{ item }}</option>
        </select>
      </label>
      <label>Add cost
        <input v-model="cost" type="number" min="0" required="required">
      </label>
      <button :class="[$style.button]" @click="add">Add</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "AddNewCost",
  data(){
    return{
      addForm:false,
      date:'',
      category:'',
      cost:0,
    }
  },
  computed:{
    ...mapGetters(['getCategory'])
  },
  methods:{
    ...mapMutations(['setNewCost']),
    showForm(){
      this.addForm = !this.addForm
    },
    add(){
      let {id, date, category, cost} = this;
      this.setNewCost({id,date, category, cost})
    }
  }
}
</script>

<style module>
.button {
  background: green;
  border: 1px solid green;
  padding: 10px 15px;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  transition: 0.3s linear;
}
.button:hover{
  background: #ffffff;
  color: green;
}
.formWrapper {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
}
label{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}
input, select {
  width: 150px;
  border: 1px solid green;
  border-radius: 5px;
  padding: 3px;
}
</style>