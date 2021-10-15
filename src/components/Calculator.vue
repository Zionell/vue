<template>
  <div :class="[$style.wrapper]">
    <div>
      <input
          name="operand1"
          type="number"
          v-model.number="operand1"
      />
      <input
          name="operand2"
          type="number"
          v-model.number="operand2"
      />
      = {{ result }}
    </div>
    <label
        :class="[$style.label]"
    >
      <input
          type="checkbox"
          v-model="check"
      >
      Отобразить экранную клавиатуру
    </label>
    <label
        :class="[$style.label]"
        v-if="check">
      <input
          type="radio"
          name="changeOperand1"
          value="operand1"
          v-model="operand"
      >
      Operand1
    </label>
    <label
        :class="[$style.label]"
        v-if="check">
      <input
          type="radio"
          name="changeOperand2"
          value="operand2"
          v-model="operand"
      >
      Operand2
    </label>
    <div :class="[$style.keyboard]">
      <div v-show="check" :class="[$style.keyboard_numbers]">
        <button
            v-for="(num,ind) in 10"
            :key="ind"
            :name="ind"
            @click="writeNum(ind)"
        >
          {{ ind }}
        </button>
        <button
            name="delete"
            @click="deleteNum()"
        >
          &#129044;
        </button>
      </div>
      <button
          v-for="operator in operators"
          :key="operator"
          :name="operator"
          @click="calcHandler(operator)"
      >
        {{ operator }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: '',
      operand2: '',
      operand: 'operand1',
      check: false,
      result: 0,
      operators: [
        'plus',
        'minus',
        'multiply',
        'devide',
        'degree',
        'floorDevide'
      ]
    }
  },
  methods: {
    writeNum(num) {
      if (this.operand == "operand1") {
        this.operand1 = "" + this.operand1;
        this.operand1 += num
        return +this.operand1
      } else {
        this.operand2 = "" + this.operand2;
        this.operand2 += num
        return +this.operand2
      }
    },
    deleteNum() {
      if (this.operand == "operand1") {
        this.operand1 = "" + this.operand1;
        this.operand1 = this.operand1.replace(/\d\b/, "");
        this.operand1 = +this.operand1;
      } else {
        this.operand2 = "" + this.operand2;
        this.operand2 = this.operand2.replace(/\d\b/, "");
        this.operand2 = +this.operand2;
      }
    },
    calcHandler(action) {
      switch (action) {
        case 'plus':
          return this.result = parseInt(this.operand1) + parseInt(this.operand2);
        case 'minus':
          return this.result = this.operand1 - this.operand2;
        case 'multiply':
          return this.result = this.operand1 * this.operand2;
        case 'devide':
          if (this.operand2 != 0) {
            return this.result = this.operand1 / this.operand2;
          }
          this.result="На ноль делить нельзя";
          break;
        case 'degree':
          return this.result = this.operand1 ** this.operand2;
        case 'floorDevide':
          if (this.operand2 != 0) {
            return this.result = Math.floor(this.operand1 / this.operand2);
          }
          this.result="На ноль делить нельзя";
          break;
      }
    }
  }
}
</script>

<style module>
.wrapper {
  display: flex;
  flex-direction: column;
  align-content: center;
}

.keyboard {
  display: grid;
  grid-template-columns: 10fr 2fr;
  grid-template-columns: 0fr 0fr;
  justify-content: center;
}

.keyboard_numbers {
  grid-row: 1/8;
  display: grid;
  grid-template-columns: repeat(3, 40px);
  grid-template-rows: repeat(4, 40px);
}

.label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  flex-direction: column;
}
</style>