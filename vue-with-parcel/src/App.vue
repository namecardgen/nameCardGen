<template>

  <div>
    <div id="landing-page" v-if="!isLoggedIn">
      <div class="container">
        <landingTitle></landingTitle>
        <!-- <landingBody></landingBody> -->
         <div class="d-flex justify-content-between forms">
            <loginForm v-on:kirimlogin="loginUser"></loginForm>
            <registerForm v-on:kirimregister="registerUser"></registerForm>
        </div>  
      </div>
    </div>

    <div id="content" v-if="isLoggedIn">
      <div class = "row">
        <createCard v-on:upload="uploadImg"></createCard>
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
import asset from '../asset/*.*'

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
          isLoggedIn: true,
          asset : asset
        }
    },
    created: function() {
      let token = localStorage.token

      if(token) {
        this.isLoggedIn = true
      } 
      else {
        this.isLoggedIn = false
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
        },

        uploadImg(src) {
          // console.log(src, '==========')
        
          axios({ 
            method: 'POST',
            url: 'http://localhost:3000/cards',
            data: {
              image: src,
            },
            headers: {
              token: localStorage.getItem('token')
            }
          })
            .then(({data}) => {
              console.log(data)
            })
            .catch(err => {
              console.log(err)
            })
        }
    }
}
</script>

<style scoped>

</style>
