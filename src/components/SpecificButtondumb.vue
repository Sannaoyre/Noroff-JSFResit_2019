<template>
  <div>
    <button class="[ card_button ]" @click="readMore()">
      <p class="[ card_button-text ]">Read more</p>
    </button>
     <div class="[ cardInfo ]" v-show="isActive">
        <p>{{name}}</p>
        <p>{{id}}</p>
        <p>{{nationalPokedexNumber}}</p>
        <p>{{types}}</p>
        <p>{{evolvesFrom}}</p>
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



        <p class="[ cardInfo_subline ]">{{weaknesses}}</p>
        <ul>
          <li><p>{{weaknessesType}}</p></li>
          <li><p>{{weaknessesValue}}</p></li>
        </ul>


        <p class="[ cardInfo_subline ]">{{attacks}}</p>
        <ul>
          <li><p>{{convertedEnergyCost}}</p></li>
          <li><p>{{attacksCost}}</p></li>
          <li><p>{{attacksName}}</p></li>
          <li><p>{{attacksDamage}}</p></li>
          <li><p>{{attacksText}}</p></li>
        </ul><br>


        <ul>
          <li><p>{{convertedEnergyCost2}}</p></li>
          <li><p>{{attacksCost2}}</p></li>
          <li><p>{{attacksName2}}</p></li>
          <li><p>{{attacksDamage2}}</p></li>
          <li><p>{{attacksText2}}</p></li>
        </ul>

        <p class="[ cardInfo_subline ]">{{resistances}}</p>
        <ul>
          <li><p>{{resistancesType}}</p></li>
          <li><p>{{resistancesValue}}</p></li>
        </ul>

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
      isActive: false,

      name: "",
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
      evolvesFrom: "",

      weaknesses: "",
      weaknessesType: "",
      weaknessesValue: "",

      attacks: "",
      attacksName: "",
      attacksDamage: "",
      attacksText: "",
      attacksCost: "",
      convertedEnergyCost: "",

      attacksName2: "",
      attacksDamage2: "",
      attacksText2: "",
      attacksCost2: "",
      convertedEnergyCost2: "",

      resistances: "",
      resistancesType: "",
      resistancesValue: "",

    }
  },
  methods:{
    readMore() {
      var myCard = JSON.parse(localStorage.getItem("cardinfo"));

      this.isActive = !this.isActive;

      this.name = 'Name:' + " " + myCard.name;
      this.id = 'Id:' + " " +  myCard.id;
      this.nationalPokedexNumber = 'National Pokedex Number:' + " " + myCard.nationalPokedexNumber;
      this.types = 'Types:' + " " +  myCard.types;
      this.supertype = 'Supertype:' + " " +  myCard.supertype;
      this.subtype = 'Subtype:' + " " +  myCard.subtype;
      this.hp = 'Hp:' + " " +  myCard.hp;
      this.retreatCost = 'Retreat Cost:' + " " +  myCard.retreatCost;
      this.convertedRetreatCost = 'Converted Retreat Cost:' + " " +  myCard.convertedRetreatCost;
      this.number = 'Number:' + " " +  myCard.number;
      this.artist = 'Artist:' + " " +  myCard.artist;
      this.rarity = 'Rarity:' + " " +  myCard.rarity;
      this.series = 'Series:' + " " + myCard.series;
      this.set = 'Set:' + " " + myCard.set;
      this.setCode = 'SetCode:' + " " + myCard.setCode;
      this.evolvesFrom = 'Evolves from:' + " " + myCard.evolvesFrom;

      this.weaknesses = 'Weaknesses:';
      this.weaknessesType = 'Type:' + " " + myCard.weaknesses[0].type;
      this.weaknessesValue = 'Value:' + " " + myCard.weaknesses[0].value;

      this.attacks = "Attacks:";
      this.attacksName = "Name:" + " " + myCard.attacks[0].name;
      this.attacksDamage = "Damage:" + " " + myCard.attacks[0].damage;
      this.attacksCost = "Cost:" + " " + myCard.attacks[0].cost;
      this.attacksText = "Text:" + " " + myCard.attacks[0].text;
      this.convertedEnergyCost = "Converted Energy Cost:" + " " + myCard.attacks[0].convertedEnergyCost;

      this.attacksName2 = "Name:" + " " + myCard.attacks[1].name;
      this.attacksDamage2 = "Damage:" + " " + myCard.attacks[1].damage;
      this.attacksCost2 = "Cost:" + " " + myCard.attacks[1].cost;
      this.attacksText2 = "Text:" + " " + myCard.attacks[1].text;
      this.convertedEnergyCost2 = "Converted Energy Cost:" + " " + myCard.attacks[1].convertedEnergyCost;

      this.resistances = "Resistances:";
      this.resistancesType = "Type:" + " " + myCard.resistances[0].type;
      this.resistancesValue = "Value:" + " " + myCard.resistances[0].value;

   }
 },
}








</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.cardInfo{
  margin-top: 2%;
  p{
    text-align: left;
    margin-left: 5%;
  }
  li{
    list-style-type: none;
  }
  &_subline{
    font-weight: bolder;
  }
}


</style>
