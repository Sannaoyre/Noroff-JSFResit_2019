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
      var regex = new RegExp(this.search, "gi");
      var myCards = this.cards.filter ( function (card) {
        return card.name.match(regex);
      });
      console.log (myCards);
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
