<template>
  <div class="[ searchContainer ]">

    <form>
      <input type="text" v-model="search" placeholder="Search for pokémons" @keyup="getNames">
      <button class="[ search_button ]" @click="getNames">
        <img src="@/assets/search.png" class="[ search_button-image ]" alt="Search icon">
      </button>
    </form>

  </div>
</template>



<script>

export default {
  name: 'HomeSearchfield',
  props: ['cards'],
  data (){
    return{
      search: ""
    }
  },
  methods: {
    getNames(){
      //console.log(this.search);
      var regex = new RegExp(this.search, "gi");
      var myCards = this.cards.filter ( function (card) {
        //console.log (regex, card.name);
        return card.name.match(regex); // Returner alle med treff
      });
      console.log (myCards); // Har en mindre liste med alle treff
      // Lag en dropdown fra inputfelt med <a href="# med id på kort">
      // Eller få oppdatert cards med myCards før utlisting

    }
  }
}

</script>



<style lang="scss" scoped>
@import '@/styles/main.scss';

.searchContainer {
  margin-left: 12%;
  margin-right: 12%;
  margin-top: 10%;
  form {
    display:flex;
    flex-direction:row;
    padding:2px;
  }
  input{
    flex-grow:2;
    border:none;
    width: 100%;
    height: 40px;
    color: $dark-purple;
    font-size: 18px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid $purple;
    &:focus{
      outline: none;
      background-color: #BEBED3;
    }
    &::placeholder{
      color: $purple;
    }
  }
}



</style>
