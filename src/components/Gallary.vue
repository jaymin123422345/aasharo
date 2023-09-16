<template>
    <div
    style="background-color: silver;padding-top: 150px;"
      class="row "
    >
      <div>
        <ul>
          <li
            v-for="(image, index) in media"
            :key="index"
            style="display: inline-block"
          >
            <img
              :src="`../images/image1.jpg`"
              class="imageHeight"
              @click="openGallery(index)"
            >
          </li>
        </ul>
  
        <LightBox
          ref="lightbox"
          :media="media"
          :show-caption="true"
          :show-light-box="false"
          :site-loading="siteLoading"
        />
      </div>
    </div>
  </template>
  
  <script>
  import LightBox from './components/LightBox'
  
  import siteLoading from './siteloading.gif'
  import {
    media,
    paragraphs,
  } from './dummy'
  
  export default {
    name:'gallaryVue',
    components: {
      LightBox,
    },
  
    data () {
      return {
        media,
        siteLoading,
        paragraphs,
      }
    },
  
    methods: {
      openGallery(index) {
        this.$refs.lightbox.showImage(index)
      }
    }
  }
  </script>
  <style>
  @media only screen and (max-width: 600px) {
  .imageHeight{
    height: 100px;
  }
  }
  @media only screen and (min-width: 600px) {
  .imageHeight{
    height: 300px;
  }
  }
</style>