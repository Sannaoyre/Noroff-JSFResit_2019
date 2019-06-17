<template>
  <div>
    <div class="[ header ]">
      <img class="[ header_image ]" src="@/assets/background.png">
      <img class="[ header_image-mobile ]" src="@/assets/background_mobile.png">
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
    width: 100%;
    text-align: center;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $purple;
    &-large{
      font-size: 25px;
    }
    &-small{
      font-size: 16px;
    }
  }
  &_image{
    width: 100%;
    height: auto;
    margin-top: 10%;
    display: none;
    &-mobile{
      width: 100%;
      height: auto;
      display: block;
      margin-top: 50%;
    }
  }
}

@media screen and (min-width: 700px){
  .header{
    &_text {
      top: 35%;
      left: 50%;
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
      display: block;
      margin-top: 50%;
      &-mobile{
        display: none;
      }
    }
  }
}

@media screen and (min-width: 900px){
  .header{
    &_image{
      margin-top: 10%;
    }
  }
}
</style>
