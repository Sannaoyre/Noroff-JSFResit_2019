<template>
<div>
   <nav v-on:scroll="handleScroll">
       <router-link to="/" class="[ navigation_imagelink ]">
         <img src="@/assets/pokeball.png" alt="Logo for pokemon" class="[ logo ]">
       </router-link>

        <div id="menuToggle">

          <input type="checkbox" id="checkbox" />
             <span ></span>
             <span></span>
             <span></span>

           <section id="menu" >
              <router-link to="/">Home</router-link>
              <router-link to="grass">Grass</router-link>
              <router-link to="contact">Contact</router-link>
           </section>


     </div>
  </nav>
   <div class="[ navigationSpace ]"></div>
</div>
</template>



<script>

export default {
name: 'PageNavigation',

methods: {
  handleClick(e){
    var box = document.getElementById('checkbox');
    if(e.target.id == "checkbox"){
      return false
    }
    if(e.target.id != "menu" && box.checked == true){
          box.checked = false;
   }

  },

 handleScroll () {
    var e = document.getElementsByTagName('nav');

    if(window.scrollY <= 10){
      e[0].classList.remove("navOnScroll");
    }
    else{
      e[0].classList.add("navOnScroll");
    }
  },
},


 created () {
  window.addEventListener('scroll', this.handleScroll);
  window.addEventListener('click', this.handleClick);
},

 destroyed () {
  window.removeEventListener('scroll', this.handleScroll);
  window.removeEventListener('click', this.handleClick);
}
}

</script>



<style lang="scss" scoped>
@import '@/styles/main.scss';

.navigation_imagelink{
  width: 5%;
}

.navigationSpace{
  height: 200px;
}

</style>
