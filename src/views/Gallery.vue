<template>
  <div class="gallery">
      <Modal v-if="modalStatus" :modalPath="modalPath" @toggleModal="closeModal"/>
      <div class="gallerybox">
          <img v-for="image in images" :key="image.src" :src="image.src" alt="photo gallery" @click="openModal(image.path)">
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Modal from '../components/Modal.vue'
export default {
    components: { Modal },
    setup() {
        const images = ref([
            {src: require('../assets/img/one.jpg'), path: 'one'},
            {src: require('../assets/img/two.jpg'), path: 'two'},
            {src: require('../assets/img/three.jpg'), path: 'three'},
            {src: require('../assets/img/four.jpg'), path: 'four'},
            {src: require('../assets/img/five.jpg'), path: 'five'},
            {src: require('../assets/img/six.jpg'), path: 'six'},
            {src: require('../assets/img/seven.jpg'), path: 'seven'},
            {src: require('../assets/img/eight.jpg'), path: 'eight'},
            {src: require('../assets/img/nine.jpg'), path: 'nine'},
            {src: require('../assets/img/ten.jpg'), path: 'ten'},
            {src: require('../assets/img/eleven.jpg'), path: 'eleven'},
            {src: require('../assets/img/twelve.jpg'), path: 'twelve'},
            {src: require('../assets/img/thirteen.jpg'), path: 'thirteen'},
            {src: require('../assets/img/fourteen.jpg'), path: 'fourteen'},
            {src: require('../assets/img/fifteen.jpg'), path: 'fifteen'},
            {src: require('../assets/img/sixteen.jpg'), path: 'sixteen'},
            {src: require('../assets/img/seventeen.jpg'), path: 'seventeen'},
            {src: require('../assets/img/eighteen.jpg'), path: 'eighteen'},
            {src: require('../assets/img/nineteen.jpg'), path: 'nineteen'},
            {src: require('../assets/img/twenty.jpg'), path: 'twenty'},
            {src: require('../assets/img/twentyone.jpg'), path: 'twentyone'},
            {src: require('../assets/img/twentytwo.jpg'), path: 'twentytwo'},
            {src: require('../assets/img/twentythree.jpg'), path: 'twentythree'},
            {src: require('../assets/img/twentyfour.jpg'), path: 'twentfour'},
            {src: require('../assets/img/twentyfive.jpg'), path: 'twentyfive'},
            {src: require('../assets/img/twentysix.jpg'), path: 'twentysix'},
            {src: require('../assets/img/twentyseven.jpg'), path: 'twentyseven'},
            {src: require('../assets/img/twentyeight.jpg'), path: 'twentyeight'},
            {src: require('../assets/img/twentynine.jpg'), path: 'twentynine'},
            {src: require('../assets/img/thirty.jpg'), path: 'thirty'},
            {src: require('../assets/img/thirtyone.jpg'), path: 'thirtyone'},
            {src: require('../assets/img/thirtytwo.jpg'), path: 'thirtytwo'},
            {src: require('../assets/img/thirtythree.jpg'), path: 'thirtythree'}
            
        ])
        const modalStatus = ref(false);
        const modalPath = ref('');
        const openModal = (path) => {
            modalStatus.value = !modalStatus.value
            modalPath.value = path
        }
        const closeModal = () => {
            modalStatus.value = false;
        }


      return { images, modalStatus, openModal, closeModal, modalPath }
    }
}
</script>

<style>
    .gallery{
        text-align: center;
    }
    .gallerybox{
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .gallerybox img{
        height: auto;
        width: 80%;
        max-width: 250px;
        margin: 10px auto;
        object-fit: cover;
        object-position: center top;
    }
</style>