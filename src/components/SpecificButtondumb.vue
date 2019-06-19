<template>
  <div>
    <button class="[ card_button ]" @click="readMore()">Read more</button>
     <div class="[ card_info ]">
        <p>{{id}}</p>
        <p>{{nationalPokedexNumber}}</p>
        <p>{{types}}</p>
        <p>{{supertype}}</p>
        <p>{{subtype}}</p>
        <p>{{hp}}</p>
        <p>{{retreatCost}}</p>
        <p>{{convertedRetreatCost}}</p>
        <p>{{number}}</p>
        <p>{{artist}}</p>
        <p>{{rarity}}</p>
        <p>{{series}}</p>
        <p>{{set}}</p>
        <p>{{setCode}}</p>
        <p>{{weaknesses}}</p>

     </div>
  </div>
</template>

<script>

export default {
  name: 'SpecificButtondumb',
  components:{
  },

  data(){
    return{
      id: "",
      nationalPokedexNumber: "",
      types: "",
      supertype: "",
      subtype: "",
      hp: "",
      retreatCost: "",
      convertedRetreatCost: "",
      number: "",
      artist: "",
      rarity: "",
      series: "",
      set: "",
      setCode: "",
      weaknesses: "",
    }
  },
  methods:{
    readMore() {
      var myCard = JSON.parse(localStorage.getItem("cardinfo"));

      this.id = 'Id:' + " " +  myCard.id;
      this.nationalPokedexNumber = 'NationalPokedexNumber:' + " " + myCard.nationalPokedexNumber;
      this.types = 'Types:' + " " +  myCard.types;
      this.supertype = 'Supertype:' + " " +  myCard.supertype;
      this.subtype = 'Subtype:' + " " +  myCard.subtype;
      this.hp = 'Hp:' + " " +  myCard.hp;
      this.retreatCost = 'RetreatCost:' + " " +  myCard.retreatCost;
      this.convertedRetreatCost = 'ConvertedRetreatCost:' + " " +  myCard.convertedRetreatCost;
      this.number = 'Number:' + " " +  myCard.number;
      this.artist = 'Artist:' + " " +  myCard.artist;
      this.rarity = 'Rarity:' + " " +  myCard.rarity;
      this.series = 'Series:' + " " + myCard.series;
      this.set = 'Set:' + " " + myCard.set;
      this.setCode = 'SetCode:' + " " + myCard.setCode;
      this.weaknesses = 'Weaknesses:' + " " + myCard.weaknesses[type];



   }
 },

}


</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.card_info{
  margin-top: 2%;
  p{
    text-align: left;
    margin-left: 5%;
  }
}


</style>
