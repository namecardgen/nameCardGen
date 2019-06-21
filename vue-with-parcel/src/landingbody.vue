<template>
   <div class="d-flex justify-content-between forms">
       <loginForm v-on:kirimlogin="loginUser"></loginForm>
       <registerForm v-on:kirimregister="registerUser"></registerForm>
    </div>  
</template>

<script>
import loginForm from "./login"
import registerForm from "./register"
export default {
    components: {
      loginForm,
      registerForm
    },
    data(){
        return {
          isLoggedIn: false
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
            // console.log('success login')
            this.$emit('statuslogin', { status: this.isLoggedIn })
            
          })
          .catch(err => {
            console.log(err)
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
