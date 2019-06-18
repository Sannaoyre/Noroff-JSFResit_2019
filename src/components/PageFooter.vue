<template>
  <footer>
    <b-container fluid>
      <b-row>
        <b-col  sm="12" md="4">
          <p><img src="@/assets/email.png" class="[ footer_icons ]" alt="Icon of an email letter">request@pokemon.com</p>
        </b-col>

        <b-col sm="12" md="4">
          <p><img src="@/assets/phone.png" class="[ footer_icons ]" alt="Icon of a phone"> 222 3333 4444</p>
        </b-col>

        <b-col sm="12" md="4">
          <p><img src="@/assets/ig.png" class="[ footer_icons ]" alt="Icon for instagram"> @pokemonGo</p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>






<script>
export default {
  name: 'PageFooter',
}
</script>



<style lang="scss" scoped>
@import '@/styles/main.scss';

.footer_icons{
  width: 50px;
}



footer{
  background-color: #BEBED3;
  margin-top: 5%;
  p{
    margin: 10px;
    text-align: left;
    font-size: 16px;
    color: $dark-purple;
  }
}



@media screen and (min-width: 700px){
  footer{
    p{
      margin: 10px;
      font-size: 14px;
      text-align: center;
    }
  }
}



@media screen and (min-width: 900px){
  footer{
    p{
      margin: 20px;
    }
  }
}
</style>
