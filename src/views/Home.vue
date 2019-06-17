<template>
  <div>
    <PageNavigation></PageNavigation>
    <HomeHeader></HomeHeader>

</div>
  </div>
</template>

<script>
import PageNavigation from '@/components/PageNavigation.vue';
import HomeHeader from '@/components/HomeHeader.vue';

export default {

  name: 'home',
  components: {
    PageNavigation,
    HomeHeader

  }
}
</script>


<style lang="scss">
@import '@/styles/main.scss';

body{
  background-color: $gray;
}

</style>
