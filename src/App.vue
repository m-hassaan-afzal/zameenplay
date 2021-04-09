<template>
  <v-app id="inspire">
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-fab-transition>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        color="white"
        fixed
        width="50"
        height="50"
        bottom
        right
        @click="toTop"
      >
        <i class="fa fa-angle-up"></i>
      </v-btn>
    </v-fab-transition>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      fab: false,
    }),
    methods: {
      onScroll(e) {
        if (typeof window === "undefined") return;
        const top = window.pageYOffset || e.target.scrollTop || 0;
        this.fab = top > 60;
      },
      toTop() {
        this.$vuetify.goTo(0);
      },
    },
  };
</script>

<style scoped>
  .v-btn--fab.v-btn--contained {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }
  .v-btn--icon.v-size--default .v-icon,
  .v-btn--fab.v-size--default .v-icon {
    height: 30px;
    font-size: 30px;
    width: 30px;
  }
  .v-btn--fab.v-btn--fixed {
    z-index: 99;
  }
  .fa-angle-up {
    display: block;
    line-height: 48px;
    font-size: 22px;
    font-weight: 600;
    color: #f9004d;
  }
  .v-btn--absolute.v-btn--bottom,
  .v-btn--fixed.v-btn--bottom {
    bottom: 60px;
  }

  .v-btn--absolute.v-btn--right,
  .v-btn--fixed.v-btn--right {
    right: 20px;
  }
</style>
