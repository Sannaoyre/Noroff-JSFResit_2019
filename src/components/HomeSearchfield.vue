<template>
  <div class="[ searchContainer ]">

    <b-container fluid>
      <b-row>
        <b-col sm="10">
          <input class="typeahead" type="text" placeholder="Search for a pokemon..">

        </b-col>

        <b-col sm="2">
          <button class="[ search_button ]">
            <img src="@/assets/search.png" class="[ search_button-image ]" alt="Search icon">
          </button>
        </b-col>

      </b-row>
    </b-container>



  </div>
</template>



<script>

export default {
  name: 'HomeSearchfield',

}

</script>



<style lang="scss" scoped>
@import '@/styles/main.scss';
.searchContainer {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
input{
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
 }
}



</style>
