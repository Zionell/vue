<template>
  <v-container>
    <v-row class="d-flex justify-space-between align-center">
      <v-col>
        <v-text-field
            v-model.number="operand1"
            name="operand1"
            type="number"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
            v-model.number="operand2"
            name="operand2"
            type="number"
        ></v-text-field>
      </v-col>
      <v-col>
        = {{ result }}
      </v-col>
    </v-row>


    <v-switch
        v-model="check"
        inset
        label="Отобразить экранную клавиатуру"
    ></v-switch>
    <v-radio-group
        v-show="check"
        v-model="operand"
        mandatory
    >
      <v-radio
          label="Operand1"
          value="operand1"
          name="changeOperand1"
      ></v-radio>
      <v-radio
          label="Operand2"
          value="operand2"
          name="changeOperand2"
      ></v-radio>
    </v-radio-group>
    <v-container
        v-show="check">
      <v-row
          class="ma-2"
          no-gutters
      >
        <v-col
            v-for="(num,ind) in 10"
            :key="ind"
        >
          <v-btn
              class="pa-2"
              :name="ind"
              @click="writeNum(ind)"
          >
            {{ ind }}
          </v-btn>
        </v-col>
      </v-row>

      <v-row
          class="ma-2"
      >
        <v-btn
            name="delete"
            @click="deleteNum()"
        >
          &#129044;
        </v-btn>
      </v-row>

    </v-container>
    <v-row
        class="ma-2"
    >
      <v-btn
          v-for="operator in operators"
          :key="operator"
          :name="operator"
          @click="calcHandler(operator)"
      >
        {{ operator }}
      </v-btn>
    </v-row>

  </v-container>
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
          this.result = "На ноль делить нельзя";
          break;
        case 'degree':
          return this.result = this.operand1 ** this.operand2;
        case 'floorDevide':
          if (this.operand2 != 0) {
            return this.result = Math.floor(this.operand1 / this.operand2);
          }
          this.result = "На ноль делить нельзя";
          break;
      }
    }
  }
}
</script>