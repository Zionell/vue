<template>
  <div :class="[$style.wrapper]">
    <button
        v-show="showBtn"
        :class="[$style.btn]"
        @click="showForm"
    >Edit
    </button>
    <button
        v-show="showBtn"
        :class="[$style.btn]"
        @click="deleteItem"
    >Delete
    </button>
    <button
        :class="[$style.btn]"
        @click="closeModal"
    >Close
    </button>
    <div :class="[$style.content]">
      <component :is="formShow"></component>
    </div>
  </div>
</template>

<script>


import FormInputs from "../FormInputs";
import {mapMutations} from "vuex";

export default {
  name: "ModalWindow",
  props: {
    modalShow: Number,
    modalWindowSettings: Object
  },
  data() {
    return {
      formShow: false,
      showBtn:true,
      date: '',
      category: '',
      cost: 0,
    }
  },
  components: {
    FormInputs
  },
  methods: {
    ...mapMutations(["deleteCost"]),
    closeModal() {
      this.$modal.hide()
    },
    showForm() {
      this.showBtn=!this.showBtn
      this.formShow = this.modalWindowSettings.compName
    },
    deleteItem() {
      this.deleteCost(this.modalWindowSettings.item)
      this.$modal.hide()
    }
  },
  mounted() {
    this.category = 15;
  }
}
</script>

<style module>
.wrapper {
  position: absolute;
  top: 60px;
  z-index: 50;
  right: -25px;
  padding: 30px 10px;
  background: #999;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.btn {
  background: cadetblue;
  border: 1px solid cadetblue;
  padding: 10px 15px;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  min-width: 150px;
  transition: 0.3s linear;
}
.btn:hover {
  background: #ffffff;
  color: cadetblue;
}
</style>