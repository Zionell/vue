<template>
  <div :class="[$style.wrapper]">
<!--    <div :class="header">{{ modalWindowSettings.header }}</div>-->
    <div :class="[$style.content]">
      <component :is="modalWindowSettings.compName"></component>
    </div>
    <div :class="[$style.btn]">
      <button @click="closeModal">Close</button>
    </div>
  </div>

</template>

<script>


import FormInputs from "../FormInputs";
import PopupWindow from "../PopupWindow";

export default {
  name: "ModalWindow",
  props: {
    modalShow: String,
    modalWindowSettings: Object
  },
  components:{
    FormInputs,
    PopupWindow
  },
  methods:{
    closeModal(){
      this.$modal.hide()}
  }
}
</script>

<style module>
.wrapper{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
.btn{
}
</style>