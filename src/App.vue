<template>
  <Nav class="navbar" @toggleSidebar="toggleStatus"/>
  <transition name="menuslide">
    <Sidemenu v-if="sidebarStatus" class="sidebar"/>
  </transition>
  <div class="routerPage">
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
    const sidebarStatus = ref(false);
    const toggleStatus = () => {
      sidebarStatus.value = !sidebarStatus.value
    }
    const router = useRouter()
    router.afterEach(() => {
      sidebarStatus.value = false;
    })
    

    
    return { sidebarStatus, toggleStatus, router }
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