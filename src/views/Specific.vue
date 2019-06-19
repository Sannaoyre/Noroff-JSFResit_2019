<template>
  <div>
    <PageNavigation></PageNavigation>
    <SpecificCardssmart></SpecificCardssmart>
    <PageFooter></PageFooter>

  </div>
</template>



<script>
import PageNavigation from '@/components/PageNavigation.vue';
import SpecificCardssmart from '@/components/SpecificCardssmart.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
    name: 'specific',
    components: {
      PageNavigation,
      SpecificCardssmart,
      PageFooter

    }
  }
</script>



<style lang="scss" scoped>

</style>
