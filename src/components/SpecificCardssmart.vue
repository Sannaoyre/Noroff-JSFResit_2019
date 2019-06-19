<template>
  <div class="[ cardSpecific ]">
    <h1>View card</h1>
    <p>{{name}}</p>
    <img v-bind:src="imgsrc" alt="Picture of card">
    <SpecificButtondumb></SpecificButtondumb>
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
      imgsrc: ""
    }
  },
  methods:{
    readValue() {
      var myCard = JSON.parse(localStorage.getItem("cardinfo"));
    // console.log(myCard.name, myCard.id, myCard.imageUrl);
    console.log(myCard)
      this.name = myCard.name;
      this.imgsrc = myCard.imageUrlHiRes;

   }
 },

 created: function () {
   	},
   	mounted: function () {
   		this.readValue();
   	},

}


</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.cardSpecific{
 height: auto;
 margin: auto;
 width: 50%;
 border: 3px solid $purple;
 padding: 10px;
 text-align: center;
 p{
   font-size: 40px;
   font-weight: bolder;
 }
}

</style>
