<template>
  <div :class="[$style.wrapper]">
    <div>
      <input
          v-model.number="operand1"
      />
      <input
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
          name="changeOperand"
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
          name="changeOperand"
          value="operand2"
          v-model="operand"
      >
      Operand2
    </label>
    <div :class="[$style.keyboard]">
      <div v-show="check" :class="[$style.keyboard_numbers]">
        <button
            v-for="(num,ind) in numbers"
            :key="ind"
            @click="writeNum(ind)"
        >
          {{ ind }}
        </button>
        <button
            @click="deleteNum()"
        >
          &#129044;
        </button>
      </div>
      <button
          v-for="operator in operators"
          :key="operator"
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
      operand1Arr: [],
      operand2Arr: [],
      operand: 1,
      check: false,
      result: 0,
      numbers: Array(10),
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
  computed: {
    operand1() {
      return this.operand1Arr.join('')
    },
    operand2() {
      return this.operand2Arr.join('')
    }
  },
  methods: {
    writeNum(num) {
      if (this.operand == "operand1") {
        return this.operand1Arr.push(num)
      } else {
        return this.operand2Arr.push(num)
      }
    },
    deleteNum() {
      if (this.operand == "operand1") {
        return this.operand1Arr.pop()
      } else {
        return this.operand2Arr.pop()
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
          if (this.operand2 !== 0) {
            return this.result = this.operand1 / this.operand2;
          }
          alert("На ноль делить нельзя")
          break;
        case 'degree':
          return this.result = this.operand1 ** this.operand2;
        case 'floorDevide':
          if (this.operand2 !== 0) {
            return this.result = Math.floor(this.operand1 / this.operand2);
          }
          alert("На ноль делить нельзя")
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
.label{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  flex-direction: column;
}
</style>