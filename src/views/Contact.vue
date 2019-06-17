<template>
  <div>
    <PageNavigation></PageNavigation>
    <ContactForm></ContactForm>
    <PageFooter></PageFooter>
  </div>
</template>


<script>
import PageNavigation from '@/components/PageNavigation.vue';
import ContactForm from '@/components/ContactForm.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: 'contact',
  components: {
    PageNavigation,
    ContactForm,
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
