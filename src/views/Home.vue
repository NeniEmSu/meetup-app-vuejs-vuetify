<template>
  <div class="home">
    <Carousel/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/carousel.vue";

export default {
  name: "carousel",
  components: {
    Carousel
  }
};
</script>
