<template>
  <div>
    <PageNavigation></PageNavigation>
    <HomeHeader></HomeHeader>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageNavigation from '@/components/PageNavigation.vue';
import HomeHeader from '@/components/HomeHeader.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {

  name: 'home',
  components: {
    PageNavigation,
    HomeHeader,
    PageFooter

  }
}
</script>


<style lang="scss">
@import '@/styles/main.scss';

body{
  background-color: $gray;
}

</style>
