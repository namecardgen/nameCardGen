<template>

  <div>
    <div id="landing-page" v-bind:class=" isLoggedIn ? 'hide' : 'show'">
      <div class="container">
        <landingTitle></landingTitle>
        <!-- <landingBody></landingBody> -->
         <div class="d-flex justify-content-between forms">
            <loginForm v-on:kirimlogin="loginUser"></loginForm>
            <registerForm v-on:kirimregister="registerUser"></registerForm>
        </div>  
      </div>
    </div>

    <div id="content" v-bind:class=" isLoggedIn ? 'show' : 'hide'">
      <div class = "row">
        <createCard></createCard>
        <listCard></listCard>
      </div>
    </div>
  </div>

</template>


<script>
import landingTitle from "./landingtitle";
import landingBody from "./landingbody";
import createCard from "./createcard";
import listCard from "./listCard"

import loginForm from "./login"
import registerForm from "./register"

export default {
    components: {
      landingTitle,
      landingBody,
      createCard,
      listCard,
      loginForm,
      registerForm
    },
    data(){
        return {
          isLoggedIn: false,
        }
    },
    methods: {
        loginUser(user) {
          axios({ 
            method: 'POST',
            url: 'http://localhost:3000/login', 
            data: {
              email: user.email,
              password: user.password
            }
          })
            .then(({data}) => {
              localStorage.setItem('token', data.token)
              this.isLoggedIn = true

              Swal.fire('Succesfully signed in')
              
            })
            .catch(err => {
              swal.fire('Username/password wrong')
            })
        },
         registerUser(user) {
          axios({ 
            method: 'POST',
            url: 'http://localhost:3000/register',
            data: {
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              password: user.password
            }
          })
            .then(({data}) => {             
                Swal.fire('Succesfully registered')
            })
            .catch(err => {
                swal.fire(err.response.data.msg)
            })
        }
    }
}
</script>

<style scoped>

</style>
