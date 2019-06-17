<template>
  <div>
    <form @submit="checkForm" action="" method="post">
      <b-container fluid>
        <b-row>

          <b-col sm="12" md="6">
            <p>
                <input type="text" name="name" id="name" v-model="name" placeholder="Name" v-on:blur="checkName()">
                <span class="[ error ]" v-if="nameError">{{ nameError }}</span>
            </p>
          </b-col>

          <b-col sm="12" md="6">
            <p>
                <input type="text" name="lastName" id="lastName" v-model="lastName" placeholder="Last name" v-on:blur="checkLastname()">
                <span class="[ error ]" v-if="lastNameError">{{ lastNameError }}</span>
            </p>
          </b-col>

          <b-col sm="12">
            <p>
                <input type="text" name="phone" id="phone" v-model="phone" placeholder="Phone" v-on:blur="checkphone()">
                <span class="[ error ]" v-if="phoneError">{{ phoneError }}</span>
            </p>
          </b-col>

          <b-col sm="12">
            <p>
                <textarea type="text" name="message" id="message" v-model="message" placeholder="Message" rows="6" v-on:blur="checkMessage()"></textarea>
                <span class="[ error ]" v-if="messageError">{{ messageError }}</span>
            </p>
          </b-col>

        </b-row>
      </b-container>

      <button class="[ button_form ]" type="submit" value="submit">
        <p>SEND</p>
      </button>

    </form>

  </div>
</template>


<script>
export default {
  name: 'ContactForm',
  data(){
    return{
    nameError: null,
    lastNameError: null,
    phoneError: null,
    messageError: null,
    name: null,
    lastName: null,
    phone: null,
    message: null,
  }
  },


 methods: {
   checkForm:function(e) {
     var a = this.checkName();
     var b = this.checkLastname();
     var c = this.checkphone();
     var d = this.checkMessage();
     if (a&&b&&c&&d) return true;
     e.preventDefault();
   },

   checkName() {
     this.nameError = "";
       if(!this.name) {
         this.nameError = "Name required.";
         return false;
       } else {
         return true;
      }
   },

  checkLastname(){
    this.lastNameError = "";
      if(!this.lastName) {
        this.lastNameError = "Last name required.";
        return false;
      } else {
        return true;
      }
  },

  checkphone(){
   const phoneExp = /^\d{3}[-]\d{3}[-]\d{4}|\d{3}[.]\d{3}[.]\d{4}|\d{3}[\s]\d{3}[\s]\d{4}/g;
    this.phoneError = "";
    if(!phoneExp.test(this.phone)){
      this.phoneError ="Please fill in a valid phone number.";
      return false;
    } else {
      return true;
    }
  },


  checkMessage(){
    this.messageError = "";
      if(!this.message) {
        this.messageError = "A message is required.";
        return false;
      } else {
        return true;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

span{
  position: absolute;
  margin-left: 2%;
}

</style>
