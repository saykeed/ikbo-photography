<template>
  <div class="home">
    <div class="intro">
         <h1>Hi, I'm Ismail, Professional Photo & Videographer</h1>
         <p>We offer the full spectrum of Media services. From creating standard Wedding photography experience to Fashion and Potrait Photography to Video Production.</p>
         <div class="Btn"><i class="fa fa-whatsapp"></i> Let's talk</div>
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
    <div class="firstrow">
      <div class="writeup">
        <p style="color: rgb(225, 85, 10);">Potrait Photography</p>
        <h2>We make story <br/> with every image </h2>
        <p>At Ikbo photography and coverage, you are our super star and all activities at the studio is geared towards making you comfortable</p>
        <div class="Btn">Book Now</div>
      </div>
      <div>
        <img src="../assets/slides/twentyseven.jpg" alt="potrait img">
      </div>
    </div>

    <div class="secondrow">
      <div class="writeup">
        <p style="color: rgb(225, 85, 10);">Wedding Photography</p>
        <h2>We make story <br/> with every image </h2>
        <p>The people who hire me as a wedding photographer hire me not just because of my photographic style, they hire me because of the style of my personality. My style and personality match, so they know they're getting a genuine style.</p>
        <div class="Btn">Book Now</div>
      </div>
      <div>
        <img src="../assets/slides/fourteen.jpg" alt="potrait img">
      </div>
    </div>
    
    <div class="footer">
      <h3>IKBO</h3>
      <p>Copywrite Ikbo Media @ 2022</p>
      <div class="socialBtn">
          <i class="fa fa-facebook"></i>
          <i class="fa fa-instagram"></i>
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
    font-size: 15px;
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
  .Btn{
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
    padding: 0 2%;
  }
  .imgPrev img{
    width: auto;
    height: 150px; 
    margin: 10px;
    border-radius: 20px;
    box-shadow: 2px 2px 8px rgba(255, 255, 255, 0.624);
  }
  .profile{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    max-width: 600px;
    margin: 20px auto;
  }
  .profile div{
    width: 46%;
    margin: 2%;
  }
  .profile div h2 span{
    color: rgb(225, 85, 10);
  }
  .firstrow, .secondrow{
    width: 90%;
    margin: 0 auto;
  }
  .firstrow div, .secondrow div{
    margin: 40px auto
  }
  .firstrow .writeup, .secondrow .writeup{
    max-width: 400px;
  }
  .firstrow .Btn, .secondrow .Btn{
    margin: 10px auto;
    text-align: center;
  }
  .firstrow img{
    width: 200px;
    height: 250px;
    object-fit: cover;
    object-position: center top;
    border-radius: 50px 0 0 0;
  }

  .secondrow img{
    width: 200px;
    height: 250px;
    object-fit: cover;
    object-position: center top;
    border-radius: 0 50px 0 0;
  }
  .footer{
    margin: 100px auto 0;
  }
  .socialBtn{
    margin: 10px auto;
  }
  .socialBtn i{
    padding: 10px;
    margin: 0 5px;
    font-size: 20px;
  }
  





  /*for the responsieve screen of lg and above*/
  @media screen and (min-width:600px){
      .profile{
        justify-content: space-between;
      }
      .profile div{
        width: fit-content;
      }
      .firstrow, .secondrow{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .secondrow{
        flex-direction: row-reverse;
      }
      .firstrow div, .secondrow div{
        width: 44%
      }
      .firstrow .writeup, .secondrow .writeup{
        text-align: left;
      }
      .firstrow .writeup h2, .secondrow .writeup h2{
        font-size: 40px;
      }
      .firstrow div:nth-child(2){
        text-align: right;
      }
      .secondrow div:nth-child(2){
        text-align: left;
      }
      .firstrow .Btn, .secondrow .Btn{
        margin: 10px 0;
        text-align: center;
      }
  }
</style>


