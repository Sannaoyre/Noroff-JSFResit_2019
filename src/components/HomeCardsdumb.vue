<template>
    <div class="[ cardContainer ]">
      <b-container fluid>
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

  methods:{
    reply_click(index) {
  // console.log(index);
  //console.log('props' + this.cards)
     localStorage.setItem("cardinfo", JSON.stringify(this.cards[index]));
     window.location.href = "/#/specific";

   }
  },

};

</script>




<style lang="scss" scoped>
@import '@/styles/main.scss';
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
