<template>
  <div class="contact" ref="contactpage">
    <a id="outerlink" ref="phone" href="tel:07031228335">Call us at 866-556-2570</a>
    <a id="outerlink" ref="whatsapp" href="https://api.whatsapp.com/send?phone=+2348029480439">Click to connect +506 0000 0000</a>
    <a id="outerlink" ref="email" href="mailto:www.ikbo.com@gmail.com">Send email</a>
      <div class="contactbox">
          <div class="one">
            <h1>NOW THAT YOU ARE HERE</h1>
            <p>Feel free to contact us...</p>
            <transition-group tag="ul"
              appear
              @before-enter="beforeEnter"
              @enter="enter"
            >
              <li v-for="(option, index) in options" :key="option.label" @click="contactIkbo(option.label)" :data-index="index">
                <i :class="option.icon"></i> {{ option.text }}
              </li>
            </transition-group> 
          </div>
          <div class="two">
            <form ref="getForm" action="https://getform.io/f/c6faefbe-1c4d-4aa8-a7c1-a51af3476e46" method="POST">
              <input type="text" name="name" placeholder="Your Name" required>
              <input type="text" name="email" placeholder="Your Email" required>
              <textarea id="message" name="message" cols="10" rows="10" placeholder="Your Message" required></textarea>
              <div class="btn" @click="sendMessage">Send Message</div>
            </form>
          </div>
      </div>
  </div>
  <Location v-if="locationModal" @closeLocationModal="closeModal"/>
</template>

<script>
import { ref } from '@vue/reactivity'
import gsap from 'gsap'
import Location from '../components/Location.vue'
export default {
  components: { Location },
  setup() {
    const options = ref([
      {text: '+234-7031228335', icon: 'fa fa-phone', label: 'phone'},
      {text: 'www.Ikbo.com@gmail.com', icon: 'fa fa-envelope', label: 'email'},
      {text: '+234-8029480439', icon: 'fa fa-whatsapp', label: 'whatsapp'},
      {text: 'Click me', icon: 'fa fa-map-marker', label: 'location'}
    ])
    const phone = ref(null)
    const email = ref(null)
    const whatsapp = ref(null)
    const locationModal = ref(false)
    const getForm = ref(null)


    const contactIkbo = (x) => {
      if(x === 'phone') {
        phone.value.click()
      } else if(x === 'whatsapp') {
        whatsapp.value.click()
      } else if(x === 'email') {
        email.value.click()
      } else if(x === 'location') {
        setTimeout(() => {
          locationModal.value = true;
        }, 200)
      }
    }

    const closeModal = () => {
      locationModal.value = false;
    }

    const beforeEnter = (el) => {
      el.style.opacity = 0 
      el.style.transform = 'translateY(70px)'
    }

    const enter = (el, done) => {
      gsap.to(el, {
        duration: 1.2,
        y: 0,
        opacity: 1,
        onComplete: done,
        delay: 0.5 * el.dataset.index
      })
    }

    const sendMessage = (e) => {
      const name = getForm.value.name.value
      const email = getForm.value.email.value
      const message = getForm.value.message.value
      if(name && email && message) {
        getForm.value.submit()
      } else {
        alert('All fields are required') 
      }
      
    }

    return { sendMessage, getForm, options, beforeEnter, enter, contactIkbo, phone, email, whatsapp, locationModal, closeModal }
  },
  mounted() { 
    /*
    let c = this.$refs.contactpage
    // auto scroll back to top
    const scrollback = () => {
      console.log(c)
      c.scrollTo(0, 0);
    }
    scrollback()
    */
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
    font-size: 13px;
    width: 250px;
    margin: 15px auto;
    border-radius: 20px;
    box-shadow: 2px 2px 2px rgba(250, 250, 250, 0.300), -2px -2px 2px rgba(250, 250, 250, 0.300);
  }
  div.one ul li:active{
    background: rgba(255, 255, 255, 0.227); 
  }
  div.one ul li:hover{
    background: rgba(255, 255, 255, 0.227); 
  }
  div.one ul li i{
    width: 30px;
    font-size: 18px;
    color: orangered;
  }
  div.two form{
    background: white;
    border-radius: 10px;
    padding: 20px;
    max-width: 500px;
    margin: 0 auto;
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