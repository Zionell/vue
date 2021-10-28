<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.row]">
      <p>#</p>
      <p>Date</p>
      <p>Category</p>
      <p>Cost</p>
    </div>
    <div :class="[$style.row]" v-for="(item,ind) in getRenderPage" :key="ind">
      <p>{{ ind+1 }}</p>
      <p>{{ item.date }}</p>
      <p>{{ item.category }}</p>
      <p>{{ item.cost }}</p>
      <button
          @click="openModal( ind , item )"
      >...
      </button>
      <transition name="fade">
        <ModalWindow
            v-if="modalShow===ind"
            :modalShow="modalShow"
            :modalWindowSettings="modalWindowSettings"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import ModalWindow from "./ModalWindows/ModalWindow";


export default {
  name: "PaymentsList",
  components: {
    ModalWindow
  },
  props: {
    pageLength: Number
  },
  data() {
    return {
      page: 1,
      modalShow: null,
      modalWindowSettings: {}
    }
  },
  computed: {
    ...mapGetters(['getPaymentsList']),
    checkPageNumber() {
      return +this.$route.params.page
    },
    getRenderPage() {
      let start = (this.checkPageNumber - 1) * this.pageLength;
      let end = start + this.pageLength;
      return this.getPaymentsList.slice(start, end)
    }
  },
  methods: {
    openModal(id, item) {
      this.$modal.show("PopupWindow", {compName: "FormInputs", id: id, item: item});
    },
    onShow({settings}) {
        this.modalShow = settings.id
        this.modalWindowSettings = settings
    },
    onClose() {
      this.modalShow = ''
      this.modalWindowSettings = {}
    },
  },
  mounted() {
    this.page = +this.$route.params.page
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('close', this.onClose)
  },
  beforeDestroy() {
    this.$modal.EventBus.$off('show', this.onShow)
    this.$modal.EventBus.$off('close', this.onClose)
  }
}
</script>

<style module>
.wrapper {
  margin-top: 50px;
  min-height: 315px;
}

.row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border: 1px solid #737373;
  border-radius: 10px;
  background: #e5e5e5;
  position: relative;
}

.row:nth-child(odd) {
  background: #999;
}

:global(.fade-enter-active), :global(.fade-leave-active) {
  transition: opacity .5s;
}

:global(.fade-enter), :global(.fade-leave-to) {
  opacity: 0;
}
</style>