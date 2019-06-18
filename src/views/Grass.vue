<template>
  <div>
    <PageNavigation></PageNavigation>
    <GrassHeader></GrassHeader>
    <GrassCardssmart></GrassCardssmart>
    <PageFooter></PageFooter>
  </div>
</template>


<script>
import PageNavigation from '@/components/PageNavigation.vue';
import PageFooter from '@/components/PageFooter.vue';
import GrassHeader from '@/components/GrassHeader.vue';
import GrassCardssmart from '@/components/GrassCardssmart.vue';

export default {
  name: 'grass',
  components: {
    PageNavigation,
    PageFooter,
    GrassHeader,
    GrassCardssmart

  }
}
</script>

<style lang="scss">
@import '@/styles/main.scss';

body{
  background-color: $gray;
}

</style>
