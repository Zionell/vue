<template>
  <v-container>
    <v-row class="teal lighten-3 mt-10 mb-1 align-center">
      <v-col
          :cols="1"
      >#
      </v-col>
      <v-col
          :cols="3"
      >Date
      </v-col>
      <v-col
          :cols="4"
      >Category
      </v-col>
      <v-col
          :cols="2"
      >Cost
      </v-col>
    </v-row>
    <v-row v-for="(item,ind) in getRenderPage" :key="ind" class="teal lighten-3 mb-1 align-center">
      <v-col
          :cols="1"
      >{{ ind + 1 }}
      </v-col>
      <v-col
          :cols="3"
      >{{ item.date }}
      </v-col>
      <v-col
          :cols="4"
      >{{ item.category }}
      </v-col>
      <v-col
          :cols="2"
      >{{ item.cost }}
      </v-col>
      <v-col :cols="2" class="shrink">
        <v-btn
            class="ma-2"
            color="primary"
            @click="openModal( ind , item )"
        >
          ...
        </v-btn>

        <v-scroll-x-transition
            leave-absolute
        >
          <v-card
              v-show="modalShow===ind"
          >
            <ModalWindow
                :modalShow="modalShow"
                :modalWindowSettings="modalWindowSettings"
            />
          </v-card>
        </v-scroll-x-transition>
      </v-col>
    </v-row>
  </v-container>


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
      modalWindowSettings: {},
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
