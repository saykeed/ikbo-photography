<template>
  <Nav/>

  <div class="routerPage">
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  components: { Nav },
  setup() {
    
  },
}
</script>
<style>
.routerPage{
  max-width: 1200px;
  margin: 0 auto;
}

</style>
