<template>
  <div>
    <div class="[ header_text ]">
      <h1 class="[ header_text-large ]">Contact us!</h1>
      <h3 class="[ header_text-small ]">Please fill out the form below</h3>
    </div>

    <form @submit="checkForm" action="/" method="post" v-if="!savingSuccessful" >
      <b-container fluid>
        <b-row>

          <b-col sm="12" lg="6">
            <p>
                <input type="text" name="name" id="name" v-model="name" placeholder="Name" v-on:blur="checkName()">
                <span class="[ error ]" v-if="nameError">{{ nameError }}</span>
            </p>
          </b-col>

          <b-col sm="12" lg="6">
            <p>
              <select v-model="selected"  v-on:blur="checkSelected()">
                    <option disabled value="">Please select one</option>
                    <option value="1">Enquiry</option>
                    <option value="2">Complaint</option>
                    <option value="3">Compliment</option>
                    <option value="4">General Message</option>
              </select><br>
              <span class="[ error ]" v-if="selectedError">{{ selectedError }}</span>
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


      <button class="[ form_button ]" type="submit" value="submit">
        <p>SEND</p>
      </button>

    </form>

    <div class="[ success ]" v-if="savingSuccessful">
      <img class="[ success_img ]" src="@/assets/picka.png">
      {{ this.successMessage }} <br>
      <button class="[ form_button ]" @click="$router.push('/')">Go Back</button>
  </div>
  </div>
</template>


<script>
export default {
  name: 'ContactForm',
  data(){
    return{
    nameError: null,
    selectedError: null,
    phoneError: null,
    messageError: null,
    name: null,
    selected: '',
    phone: null,
    message: null,

    savingSuccessful: false,
    successMessage: "Thank you for your request!"

  }
  },


 methods: {
   checkForm:function(e) {
     var a = this.checkName();
     var b = this.checkSelected();
     var c = this.checkphone();
     var d = this.checkMessage();
     if (a&&b&&c&&d) return this.savingSuccessful = true;
     e.preventDefault()
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

  checkSelected(){
    this.selectedError = "";
      if(!this.selected) {
        this.selectedError = "Please select one.";
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
@import '@/styles/_form.scss';

body{
  background-color: $gray;
}
span{
  position: absolute;
  margin-left: 2%;
}
.success{
  height: auto;
  width: 90%;
  margin: 0 auto;
  padding: 5%;
  margin-top: 20%;
  margin-bottom: 20%;
  text-align: center;
  font-weight: bolder;
  font-size: 14px;
  border: 0.5px solid $purple;
  background-color: #f2f2f2;
  box-shadow: 5px 10px 18px #888888;
  &_img{
    width: 100px;
  }

}
.header{
  &_text {
    text-align: center;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $purple;
    &-large{
      font-size: 30px;
    }
    &-small{
      font-size: 18px;
    }
  }
}

@media screen and (min-width: 700px){
  .success{
    height: 300px;
    width: 600px;
    padding: 5%;
    margin-top: 20%;
    margin-bottom: 50%;
    font-size: 20px;
  }
  .header{
    &_text {
      top: 25%;
      left: 50%;
      &-large{
        font-size: 50px;
      }
      &-small{
        font-size: 22px;
      }
    }
  }
}

@media screen and (min-width: 900px){
  .success{
    margin-top: 5%;
    margin-bottom: 10%;
  }
}
</style>
