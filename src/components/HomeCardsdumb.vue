<template>
    <div class="[ cardContainer ]">
      <b-container fluid>

        <form>
          <input type="text" v-model="search" placeholder="Search for pokémons" @keyup="getNames">
          <button class="[ search_button ]" @click="getNames">
            <img src="@/assets/search.png" class="[ search_button-image ]" alt="Search icon">
          </button>
        </form>

        <b-row>
          <b-col sm="12" md="3" lg="3" :href="card.href" v-for="(card, index) in cards">
            <img class="[ cardContainer_card ]" :src="card.imageUrl" :id="card.id">
            <button class="[ card_button ]" @click="reply_click(index)"><p>View me</p></button>
          </b-col>
        </b-row>

      </b-container>
    </div>
</template>



<script>
export default {
  name: 'CardDumb',
  props: ['cards'],
  data (){
    return{
      search: ""
    }
  },
  methods:{
    reply_click(index) {
     localStorage.setItem("cardinfo", JSON.stringify(this.cards[index])); //set card to local storage
     window.location.href = "/#/specific"; //redirect to card specific page
   },
   getNames(){
     console.log(this.search);
     console.log (this.allcards);
     var regex = new RegExp(this.search, "gi");
     var myCards = this.allCards.filter ( function (card) {
       return card.name.match(regex); // Returnes all matches

     });
     console.log (myCards);
     this.cards = myCards;
     // Make a dropdown from input field with <a href ="# + id on card"
     // Or update the cards from myCards (It does not update with back space...)
   }
  },
};

</script>




<style lang="scss" scoped>
@import '@/styles/main.scss';
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

  .cardContainer{
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
    &_card{
        width: 90%;
        margin-top: 20%;
        display: inline-block;
        box-shadow: 5px 10px 18px #888888;
        &:hover{
          transform: scale(1.03);
      }
    }
  }



@media screen and (min-width: 700px){
@import '@/styles/main.scss';

  .cardContainer{
    margin-left: 10%;
    margin-right: 10%;
    &_card{
        margin-top: 40%;
    }
  }
}



@media screen and (min-width: 900px){
  .cardContainer{
    &_card{
        width: 90%;
        &:hover{
          transform: scale(1.03);
      }
    }
  }
}



</style>
