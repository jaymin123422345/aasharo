<template>
    <div>

        <ul>
            <li v-for="(image, index) in json.slice(0, imageCount)" :key="index" style="display: inline-block">
                <img :src="image.thumb" class="imageHeight" @click="openGallery1(index)">
                <!-- <b-img thumbnail fluid :src="image.thumb" alt="Image 1"></b-img> -->
                <!-- <b-img :src="image.thumb"  alt="Responsive image"></b-img> -->
                <!-- <img
            src="../assets/images/image2.jpg"
            class="imageHeight"
            @click="openGallery(index)"
          > -->
            </li>
        </ul>
        <div class="d-flex justify-content-center">
  <b-button variant="primary" class="btn btn-lg"  @click="imageCount = imageCount+50">Show More</b-button>
    </div>
    </div>
</template>
<script>
export default {
    props:['json'],
    data() {
        return {
            imageCount: 10,
        }
    },
    methods:{
        openGallery1(index){
            console.log('enter1')
            this.$emit('openGallery',index)
        }
    }
}
</script>

