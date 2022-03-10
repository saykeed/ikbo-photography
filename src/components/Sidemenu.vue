<template>
  <div class="menu" ref="sideMenu">
      <ul class="sidenav">
          <li v-for="link in links" :key="link.text">
              <router-link :to="link.route"> {{ link.text }}</router-link>
          </li>
      </ul>
      
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(props, { emit }) {
        const touchStart = ref(null)
        const touchEnd = ref(null)
        const links = ref([
            {text: 'Home', route: '/'},
            {text: 'Gallery', route: '/gallery'},
            {text: 'Contact', route: '/contact'}
        ])

        const touchstart = (event) => {
            touchStart.value = event.touches[0].clientX;
            touchEnd.value = 0;
        }
        const touchmove = (event) => {
            touchEnd.value = event.touches[0].clientX;
        }
        const touchend = () => {
            if(touchStart.value > touchEnd.value) {
                emit('closeSidebar')
            }
        }



      return { links, touchstart, touchend, touchmove }
    },
    mounted() { 
        let sideBar = this.$refs.sideMenu;
        sideBar.addEventListener('touchstart', (event) => {this.touchstart(event)})
        sideBar.addEventListener('touchmove', (event) => {this.touchmove(event)})
        sideBar.addEventListener('touchend', () => {this.touchend()})
  }
}
</script>

<style>
.menu{
    background: white;
    height: 100vh;
    width: 250px;
    z-index: 9999;
}
.menu p{
    color: red;
}
.sidenav{
    margin: 50px auto;
}
.sidenav li a{
    list-style-type: none;
    text-decoration: none;
    padding: 10px 20px;
    margin: 5px auto;
    display: block;
    color: black;
    font-size: 20px;
    margin-left: 10px;
    -webkit-tap-highlight-color: transparent;
}

.sidenav li a:active{
    background: black;
    color: white;
    border-radius: 20px 0 0 20px;
}

.sidenav li a.router-link-exact-active{
    background: black;
    color: white;
    border-radius: 20px 0 0 20px;
}

</style>