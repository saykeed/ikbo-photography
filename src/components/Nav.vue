<template>
  <div class="nav">
      <h2>IKBO </h2>
      <ul class="navlinks">
        <li v-for="link in links" :key="link.text">
            <router-link :to="link.route"> {{ link.text }}</router-link>
        </li>
      </ul>
      <i class="material-icons" @click="callsidebar">{{ toggler }}</i>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: [ 'toggler' ],
  setup(props, { emit }) {
    const links = ref([
      {text: 'Home', route: '/'},
      {text: 'Gallery', route: '/gallery'},
      {text: 'Contact', route: '/contact'}
    ])
    const callsidebar = () => {
     emit('toggleSidebar')
    }

    return { links, callsidebar }
  }
}
</script>

<style>
.nav{
    color: white;
    padding: 5px 0 5px 10px; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: black;
}

.nav i{
  padding: 10px;
}

.nav i:active{
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.316);
}

ul.navlinks{
  align-items: center;
  list-style-type: none;
  display: none;
}

ul.navlinks li a{
  color: rgba(255, 255, 255, 0.481);
  text-decoration: none;
  padding: 10px 15px;
  margin: 0 5px;
  font-size: 13px;
  font-weight: 300;
  transition: all .5s ease;
}

ul.navlinks li a:active{
 color: white;
}

ul.navlinks li a:hover{
 color: white;
 border-bottom: 1px solid orangered;
}



/*for the responsieve screen of lg and above*/
@media screen and (min-width:960px){
  .nav{
    padding: 10px;
  }
    ul.navlinks{
      display: flex;
    }
    .nav i{
      display: none;
    }
    
}

</style>