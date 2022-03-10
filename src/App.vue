<template>
  <Nav class="navbar" @toggleSidebar="toggleStatus" :toggler="toggler"/>
  <transition name="menuslide">
    <Sidemenu v-if="sidebarStatus" class="sidebar" @closeSidebar="toggleStatus"/>
  </transition>
  <div class="routerPage" ref="page">
    <router-view />
  </div>
  <Footer/>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import Nav from './components/Nav.vue'
import Sidemenu from './components/Sidemenu.vue'
import Footer from './components/Footer.vue'
export default {
  components: { Nav, Sidemenu, Footer },
  setup() {
    const page = ref(null)
    const toggler = ref('menu')
    const sidebarStatus = ref(false);
    const switchToggler = () => {
      if(sidebarStatus.value == false) {
        toggler.value = 'menu'
      } else {
        toggler.value = 'close'
      }
    }
    const toggleStatus = () => {
      sidebarStatus.value = !sidebarStatus.value
      switchToggler()
    }
    const router = useRouter()
    router.afterEach(() => {
      sidebarStatus.value = false;
      switchToggler()
    })
    
    

    
    return { sidebarStatus, toggleStatus, router, page, toggler }
  },
  
}
</script>
<style>
.navbar{
  position: fixed;
  top: 0;
  width: 100%;
}
.sidebar{
  position: fixed;
  top: 0;
}
.routerPage{
  padding: 80px 0 40px;
  max-width: 1200px;
  margin: 0 auto;
}
.menuslide-enter-from, .menuslide-leave-to{
  opacity: 0;
  transform: translateX(-200px);
}
.menuslide-enter-active, .menuslide-leave-active{
  transition: all .3s ease;
}
</style>


/* 



*/