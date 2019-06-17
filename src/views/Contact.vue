<template>
  <div>
    <PageNavigation></PageNavigation>
    <ContactForm></ContactForm>
  </div>
</template>


<script>
import PageNavigation from '@/components/PageNavigation.vue';
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'contact',
  components: {
    PageNavigation,
    ContactForm

  }
}
</script>

<style>
</style>
