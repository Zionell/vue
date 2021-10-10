<template>
  <div class="app" id="app">
    <nav class="nav">
      <router-link class="mainLink" to="/dashboard">Dashboard</router-link>
      <router-link class="mainLink" to="/calculator">Calculator</router-link>
    </nav>
    <router-view />
    <ModalWindow
        v-if="modalShow"
        :modalShow="modalShow"
        :modalWindowSettings="modalWindowSettings"
    />
  </div>
</template>

<script>
import ModalWindow from "./components/ModalWindows/ModalWindow";

export default {
  name: 'App',
  components:{
    ModalWindow
  },
  data(){
    return{
      modalShow:'',
      modalWindowSettings:{}
    }
  },
  methods:{
    onShow ({settings}) {
      this.modalShow = settings.compName
      this.modalWindowSettings = settings
    },
    onClose () {
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

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 900px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.nav{
  margin-bottom: 30px;
}
.mainLink{
  padding-right: 30px;
  color: black;
  text-decoration: none;
  transition: 0.2s linear;
}
.mainLink:hover,
.router-link-active{
  color: #4989dcf2;
}
</style>
