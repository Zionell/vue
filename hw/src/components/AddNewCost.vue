<template>
  <div>
    <button :class="[$style.button]" @click="showForm">
      ADD NEW COST +
    </button>
    <div :class="[$style.formWrapper]" v-show="addForm">
      <label>Choose date
        <input v-model="date" type="date" required>
      </label>
      <label>Choose category
        <select v-model="category" required>
          <option>Food</option>
          <option>Medicine</option>
          <option>Transport</option>
          <option>Restaurant</option>
          <option>Housing</option>
          <option>Clothing</option>
        </select>
      </label>
      <label>Add cost
        <input v-model="cost" type="number" min="0" required>
      </label>
      <button :class="[$style.button]" @click="add">Add</button>
    </div>
  </div>
</template>

<script>
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
  methods:{
    showForm(){
      this.addForm = !this.addForm
    },
    add(){
      const {id, date, category, cost} = this
      this.$emit("addCost",{id,date, category, cost})
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