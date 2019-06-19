<template>
  <div class="[ searchContainer ]">

    <form>
      <input />
      <button class="[ search_button ]">
        <img src="@/assets/search.png" class="[ search_button-image ]" alt="Search icon">
      </button>
    </form>

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
  }
}



</style>
