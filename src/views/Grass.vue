<template>
  <div>
    <PageNavigation></PageNavigation>
    <PageFooter></PageFooter>

  </div>
</template>


<script>
import PageNavigation from '@/components/PageNavigation.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: 'grass',
  components: {
    PageNavigation,
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
