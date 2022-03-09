<template>
  <div class="location">
      <i class="fa fa-close close" @click="closeModal"></i>
      <div class="address">
        <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        >
            <h3>Ikbo Media is located at 20, Owoseni Street, Temidire, Sango Ota, Ogun State</h3>
        </transition>
      </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
    setup(props, { emit }) {
        const closeModal = () => {
            emit('closeLocationModal')
        }
        const beforeEnter = (el) => {
            el.style.opacity = 0
            el.style.transform = 'scale(0.5)';

        }

        const enter = (el, done) => {
            gsap.to(el, {
                duration: 0.2,
                scale: 1,
                opacity: 1,
                onComplete: done,
                delay: 0.5
            })
        }
        
      return { closeModal, beforeEnter, enter }
    }
}
</script>

<style>
    .location{
        height: 100vh;
        width: 100vw;
        background: rgba(0, 0, 0, 0.900);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .location i{
        position: absolute;
        top: 20px;
        right: 20px;
    }
    .address{
        width: 90%;
        max-width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
    }
    .address h3{
        background: white;
        color: black;
        padding: 30px 20px;
        text-align: center;
        border-radius: 20px;
    }
</style>