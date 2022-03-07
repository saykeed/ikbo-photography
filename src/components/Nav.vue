<template>
  <div class="nav">
      <h3>IKBO</h3>
      <ul class="navlinks">
        <li v-for="link in links" :key="link.text">
            <router-link :to="link.route"> {{ link.text }}</router-link>
        </li>
      </ul>
      <i class="material-icons">menu</i>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const links = ref([
      {text: 'Services', route: '/services'},
      {text: 'About', route: '/about'},
      {text: 'Contact', route: '/contact'}
    ])

    return { links }
  }
}
</script>

<style>
.nav{
    color: white;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

ul.navlinks{
  align-items: center;
  list-style-type: none;
  display: none;
}

ul.navlinks li a{
  color: rgba(255, 255, 255, 0.481);
  text-decoration: none;
  padding: 15px;
  margin: 0 5px;
  font-size: 13px;
  font-weight: 300;
}




/*for the responsieve screen of lg and above*/
@media screen and (min-width:960px){
    ul.navlinks{
      display: flex;
    }
    
}

</style>