<template>
  <div>
    <!-- Start Header Area -->
    
    <!-- End Header Area -->
    <!-- Start 404 Page  -->
    <div class="error-page-inner bg_color--4">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="inner">
              <h1 class="heading-title theme-gradient">404!</h1>
              <h3 class="sub-title">Page not found</h3>
              <span>The page you were looking for could not be found.</span>
              <div class="error-button">
                <router-link class="rn-button-style--2 btn_solid" to="/"
                  >Back To Homepage</router-link
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End 404 Page  -->
    <FooterTwo />
  </div>
</template>

<script>
  import FooterTwo from "../components/footer/FooterTwo";
  export default {
    components: {
      FooterTwo,
    },
    data() {
      return {};
    },
  };
</script>
