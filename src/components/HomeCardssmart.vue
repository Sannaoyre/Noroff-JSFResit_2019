<template>
    <CardDumb v-bind:cards="cards"/>
</template>

<script>
import CardDumb from './HomeCardsdumb.vue';

export default {
  name: 'CardSmart',
  components:{
    CardDumb
  },

  data(){
    return{
      cards: []
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
  }
};


</script>


<style lang="scss" scoped>

</style>
