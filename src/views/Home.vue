<template>
  <div>
    <!-- Start Slider Area  -->
    <div class="rn-slider-area poss_relative" id="home">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="40"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="180"
        :moveSpeed="6"
        :hoverEffect="true"
        hoverMode="repulse"
        :clickEffect="false"
        clickMode="push"
      >
      </vue-particles>
      <div
        class="slide slide-style-2 bg_image bgclass d-flex align-center"
      >
        <Banner>
          <h1 slot="heading-title" class="heading-title theme-gradient">
            Zameen Play
          </h1>
          <p slot="description" class="description">
            Comming Soon...
          </p>
        </Banner>
      </div>
    </div>
    <!-- End Slider Area -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import Banner from "../components/slider/Banner";
  import Footer from "../components/footer/FooterTwo";

  export default {
    components: {
      Banner,
      Footer,
    },
    data() {
      return {};
    },
  };
</script>
<style scoped>
.bgclass{
  background-image: url('../assets/images/background/bg_8.jpg');
}
</style>