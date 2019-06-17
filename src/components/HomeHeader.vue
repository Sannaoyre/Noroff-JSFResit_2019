<template>
  <div>
    <div class="[ header ]">
      <img class="[ header_image ]" src="@/assets/background.png">
        <div class="[ header_text ]">
        <h1 class="[ header_text-large ]">Check out the Pokémons</h1>
        <h3 class="[ header_text-small ]">Gotta Catch 'Em All!</h3>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'HomeHeader',
}
</script>



<style lang="scss">
@import '@/styles/main.scss';

.header{
  &_text {
    text-align: center;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $purple;
    &-large{
      font-size: 50px;
    }
    &-small{
      font-size: 22px;
    }
  }
  &_image{
    width: 100%;
    height: auto;
    margin-top: 5%;
  }
}


</style>
