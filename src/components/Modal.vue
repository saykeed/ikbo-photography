<template>
    <div class="modal">
        <i class="fa fa-close" @click="closeModal"></i>
        <div class="modaldetails">
            <img v-show="index == currentIndex" v-for="(image, index) in images" :key="image" :src="require('../assets/img/' + image + '.jpg')" alt="modal image">
            <div class="slidePrev">
                <img v-for="image in images" :key="image" :src="require('../assets/img/' + image + '.jpg')" alt="">
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
      
      const currentImg = computed(() => {
          return require('../assets/img/' + images.value[currentIndex.value] + '.jpg')
      })

      return { closeModal, currentImg, images, currentIndex} 
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

    .modal i{
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 20px;
    }
    .modaldetails{
        border: 1px solid red;
        width: 80%;
        max-width: 500px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .modaldetails img{
        width: 90%;
        height: 80%;
        object-fit: cover;
        object-position: center top;
    }
    .slidePrev{
        border: 1px solid blue;
        margin: 10px auto;
        display: flex;
        overflow: auto;
    }
    .slidePrev img{
        height: 40px;
        width: 40px;
        margin: 5px;
    }
    
    
</style>