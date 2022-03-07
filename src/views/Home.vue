<template>
  <div class="home">
    <div class="intro">
         <h1>Hi, I'm Ismail, Professional Photo & Videographer</h1>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta tenetur maxime ad iure placeat, qui aspernaveritatis.</p>
         <div class="introBtn"><i class="fa fa-whatsapp"></i> Let's talk</div>
    </div>
    <div class="imgPrev">
      <img v-for="image in images" :key="image.src" :src="image.src" alt="">
    </div>
    <div class="profile">
      <div v-for="profile in profiles" :key="profile.text">
        <h2>{{ profile.figure }}<span>+</span></h2>
        <p>{{ profile.text }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  setup() {
    let images = ref([
        {src: require('../assets/slides/eight.jpg')},
        {src: require('../assets/slides/eighteen.jpg')},
        {src: require('../assets/slides/fourteen.jpg')},
        {src: require('../assets/slides/one.jpg')},
        {src: require('../assets/slides/thirtyone.jpg')},
        {src: require('../assets/slides/thirtytwo.jpg')},
        {src: require('../assets/slides/nineteen.jpg')},
        {src: require('../assets/slides/twentyseven.jpg')},
        {src: require('../assets/slides/twentythree.jpg')},
        {src: require('../assets/slides/twentytwo.jpg')},
        {src: require('../assets/slides/two.jpg')}
    ])
    const profiles = ref([
      {text: 'Years of Expreience', figure: '11'},
      {text: 'Complete Project', figure: '250'},
      {text: 'Customer Base', figure: '134'}
    ])

    return { images, profiles }
  }
}
</script>

<style>
  .home{
    text-align: center;
  }
  .home p{
    font-size: 13px;
    color: rgba(255, 255, 255, 0.412);
  }
  .intro{
    width: 80%;
    max-width: 600px;
    margin: 20px auto;
  }
  .intro p{
    margin: 10px auto;
  }
  .introBtn{
    background: rgb(225, 85, 10);
    width: fit-content;
    padding: 10px;
    border-radius: 10px;
    margin: 5px auto;
    font-size: 17px;
  }
  .imgPrev{
    height: 200px;
    width: 100%;
    overflow-x: scroll;
    display: flex;
  }
  .imgPrev img{
    width: auto;
    height: 150px; 
    margin: 10px;
  }
  .profile{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    max-width: 600px;
    margin: 0 auto;
  }
  .profile div{
    width: 46%;
    margin: 2%;
  }






  /*for the responsieve screen of lg and above*/
  @media screen and (min-width:600px){
      .profile{
        justify-content: space-between;
      }
      
  }
</style>


