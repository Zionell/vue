<template>
  <div :class="[$style.wrapper]">
    <button
        :class="[$style.btn]"
        @click="showForm"
    >Edit
    </button>
    <button
        :class="[$style.btn]"
        @click="deleteItem"
    >Delete
    </button>
    <button
        :class="[$style.btn]"
        @click="closeModal"
    >Close
    </button>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "ModalWindow",
  props: {
    modalShow: Number,
    modalWindowSettings: Object
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations(["deleteCost"]),
    closeModal() {
      this.$modal.hide()
    },
    showForm() {
      this.$router.push({name: 'EditPayment', params: {item: this.modalWindowSettings.item, page:this.$route.fullPath}})
      this.$modal.hide()
    },
    deleteItem() {
      this.deleteCost(this.modalWindowSettings.item)
      this.$modal.hide()
    }
  },
  mounted() {
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