<template>
  <div>
    <h1>View card</h1>
    <div class="[ cardSpecific ]">
      <p class="[ cardSpecific_name ]">{{name}}</p>
      <p class="[ cardSpecific_type ]">{{types}}</p>
      <img v-bind:src="imgsrc" alt="Picture of card" class="[ cardSpecific_img ]">
      <SpecificButtondumb></SpecificButtondumb>
    </div>
  </div>
</template>

<script>
import SpecificButtondumb from '@/components/SpecificButtondumb.vue';

export default {
  name: 'SpecificCardssmart',
  components:{
    SpecificButtondumb
  },


  data(){
    return{
      name: "",
      types: "",
      imgsrc: ""
    }
  },
  methods:{
    readValue() {
      var myCard = JSON.parse(localStorage.getItem("cardinfo")); //get the card info from localStorage
      this.name = myCard.name;
      this.imgsrc = myCard.imageUrlHiRes;
      this.types = 'Type:' + " " +  myCard.types;

   }
 },
   	mounted: function () {
   		this.readValue();
   	},

}


</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
h1{
  text-align: center;
  margin-top: -5%;
}
.cardSpecific{
 height: auto;
 margin: auto;
 width: 80%;
 border: 3px solid $purple;
 padding: 10px;
 text-align: center;
 &_name{
   font-size: 40px;
   color: $purple;
   font-weight: bolder;
 }
 &_type{
   font-size: 20px;
   color: $purple;
   font-weight: bolder;
 }
 &_img{
   width: 70%;
 }
}
@media screen and (min-width: 700px){
  .cardSpecific{
    width: 60%;
  }
}
@media screen and (min-width: 900px){
  h1{
    margin-top: -5%;
  }
  .cardSpecific{
   width: 30%;
   padding: 10px;
   &_name{
     font-size: 40px;
   }
   &_type{
     font-size: 20px;
   }
   &_img{
     width: 70%;
   }
  }
}

</style>
