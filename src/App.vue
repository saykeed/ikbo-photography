<template>
  <Nav class="navbar" @toggleSidebar="toggleStatus"/>
  <transition name="menuslide">
    <Sidemenu v-if="sidebarStatus" class="sidebar"/>
  </transition>
  <div class="routerPage">
    <router-view/>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Nav from './components/Nav.vue'
import Sidemenu from './components/Sidemenu.vue'
export default {
  components: { Nav, Sidemenu },
  setup() {
    const sidebarStatus = ref(false);
    const toggleStatus = () => {
      sidebarStatus.value = !sidebarStatus.value
    }

    
    return { sidebarStatus, toggleStatus }
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
