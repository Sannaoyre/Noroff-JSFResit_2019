<template>
  <div>
  <!--  <HomeSearchfield v-bind:cards="cards"></HomeSearchfield> -->
    <CardDumb v-bind:cards="cards"/>
  </div>
</template>

<script>
import CardDumb from './HomeCardsdumb.vue';
import HomeSearchfield from '@/components/HomeSearchfield.vue';

export default {
  name: 'CardSmart',
  components:{
    CardDumb,
    HomeSearchfield
  },

  data(){
    return {
      cards: [],
    }
  },

  created(){
    const app = this;

    fetch('https://api.pokemontcg.io/v1/cards?setCode=base1')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      app.cards = myJson.cards;
    });
  },
};


</script>


<style lang="scss" scoped>

</style>
