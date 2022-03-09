<template>
    <div class="modal">
        <i class="fa fa-close close" @click="closeModal"></i>
        <div class="modaldetails">
            <div class="modalImg">
                <transition-group name="modalSlideLeft" mode="out-in"> 
                   <img v-show="index == currentIndex" v-for="(image, index) in images" :key="image" :src="require('../assets/img/' + image + '.jpg')" alt="modal image">
                </transition-group>
                <i class="fa fa-chevron-left left" @click="prev"></i>
                <i class="fa fa-chevron-right right" @click="next"></i>
            </div>
            <div class="slidePrev">
                <img :class="{currentslide: index == currentIndex}" v-for="(image, index) in images" :key="image" :src="require('../assets/img/' + image + '.jpg')" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from '@vue/runtime-core'
export default {
   props: ['modalPath'],
   setup(props, { emit }) {
      const closeModal = () => {emit('toggleModal')}
      const images = ref([
          'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
          'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
          'eight', 'nineteen', 'twenty', 'twentyone', 'twentytwo', 'twentythree', 'twentyfour', 
          'twentyfive', 'twentysix', 'twentyseven', 'twentyeight', 'twentynine', 'thirty',
          'thirtyone', 'thirtytwo', 'thirtythree'
      ])
      const currentIndex = ref(images.value.indexOf(props.modalPath))
      const next = () => {
          if(currentIndex.value >= images.value.length-1) {
              currentIndex.value = 0;
          } else{
              currentIndex.value++;
          }
      }
      const prev = () => {
          if(currentIndex.value <= 0) {
              currentIndex.value = images.value.length-1;
          } else{
              currentIndex.value--;
          }
      }
      
      

      return { closeModal, images, currentIndex, prev, next} 
  }
}
</script>

<style>
    .modal{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100vh;
        width: 100vw;
        background: rgba(0, 0, 0, 0.900);
        text-align: center;
    }

    .modal i.close{
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 20px;
    }
    .modaldetails{
        border: 1px solid red;
        height: 80%;
        width: 80%;
        max-width: 500px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .modalImg{
        position: relative;
        height: 80%;
        overflow: hidden;
    }

    .modalImg img{
        width: 90%;
        height: 80%;
        object-fit: cover;
        object-position: center top;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .modalImg i{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;
        padding: 10px;
        background: rgba(0,0,0,0.200)
    }

    .modalImg i.left{
        left: 0;
    }

    .modalImg i.right{
        right: 0;
    }
    .slidePrev{
        margin: 10px auto;
        width: 100%;
        display: flex;
        align-items: center;
        overflow: auto;
    }
    .slidePrev img{
        height: 40px;
        width: 40px;
        margin: 5px;
        transition: all .5s ease;
    }
    .slidePrev img.currentslide{
        height: 60px;
        width: 60px;
        border-radius: 10px;
    }

    .modalSlideLeft-leave-to{
        transform: translateX(-100%);
    }
    .modalSlideLeft-leave-active{
        transition: all .5s ease-in-out;
    }
    .modalSlideLeft-enter-from{
        transform: translateX(100%);
    }
    .modalSlideLeft-enter-active{
        transition: all .5s ease-in-out;
    }
    
    
</style>


/* 

const currentImg = computed(() => {
    return require('../assets/img/' + images.value[currentIndex.value] + '.jpg')
})

*/