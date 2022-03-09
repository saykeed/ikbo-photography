<template>
  <div class="menu">
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
    setup() {
        const links = ref([
            {text: 'Home', route: '/'},
            {text: 'Gallery', route: '/gallery'},
            {text: 'Contact', route: '/contact'}
        ])

      return { links }
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