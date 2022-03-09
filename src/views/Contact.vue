<template>
  <div class="contact">
      <div class="contactbox">
          <div class="one">
            <h1>NOW THAT YOU ARE HERE</h1>
            <p>Feel free to contact us...</p>
            <ul>
              <li v-for="(option, index) in options" :key="option.index">
                <i :class="option.icon"></i> {{ option.text }}
              </li>
            </ul>
          </div>
          <div class="two">
            <form>
              <input type="text" placeholder="Your Name">
              <input type="text" placeholder="Your Email">
              <textarea id="message" cols="10" rows="10" placeholder="Your Message"></textarea>
              <div class="btn">Send Message</div>
            </form>
          </div>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const options = ref([
      {text: '09090909090', icon: 'fa fa-phone'},
      {text: 'Ikbo@gmail.com', icon: 'fa fa-envelope'},
      {text: '09090909090', icon: 'fa fa-facebook'},
      {text: 'Click me', icon: 'fa fa-map-marker'}
    ])


    return { options }
  }
}
</script>
  
<style>
div.contactbox{
  width: 90%;
  margin: 0 auto;
}
  div.one{
    text-align: center;
  }
  div.one ul{
    text-align: left;
    margin: 30px auto;
  }
  div.one ul li{
    list-style-type: none;
    padding: 15px;
    max-width: 200px;
    margin: 15px auto;
    border-radius: 20px;
    box-shadow: 2px 2px 2px rgba(250, 250, 250, 0.300), -2px -2px 2px rgba(250, 250, 250, 0.300);
  }
  div.one ul li i{
    width: 30px;
  }
  div.two form{
    background: white;
    border-radius: 10px;
    padding: 20px;
  }
  div.two form input, #message{
    border: 1px solid rgba(0,0,0,0.300);
    width: 100%;
    height: 40px;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
  }
  #message{
    height: 200px;
    max-width: 100%;
  }
  .btn{
    padding: 10px 25px;
    width: fit-content;
    background: black;
    color: white;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }



  /*for the responsieve screen of lg and above*/
  @media screen and (min-width:800px){
    div.contactbox{
      display: flex;
      align-items:flex-start;
      justify-content: space-between;
    }
    div.one{
      text-align: left;
      width: 45%;
    }
    div.one ul li{
      margin: 15px 0;
    }
    div.two{
      width: 45%;
    }
  }
</style>