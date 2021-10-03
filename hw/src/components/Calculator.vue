<template>
  <div>
    <div>
      <input v-model="operand1"/>
      <input v-model="operand2"/>
      = {{result}}
    </div>
    <div class="keyboard">
      <button @click="plusCalc">+</button>
      <button @click="minusCalc">-</button>
      <button @click="multiplCalc">*</button>
      <button @click="devisionCalc">/</button>
      <button @click="expCalc">**</button>
      <button @click="ceilCalc">//</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data(){
    return {
      operand1: 0,
      operand2: 0,
      result: 0
    }
  },
  methods: {
    plusCalc(){
      return this.result = parseInt(this.operand1) + parseInt(this.operand2);
    },
    minusCalc(){
      return this.result = this.operand1-this.operand2;
    },
    multiplCalc(){
      return this.result = this.operand1*this.operand2;
    },
    devisionCalc(){
      return this.result = this.operand1/this.operand2;
    },
    expCalc(){
      return this.result = this.operand1**this.operand2;
    },
    ceilCalc(){
      return this.result = Math.floor(this.operand1/this.operand2);
    }
  }
}
</script>

<style scoped>

</style>