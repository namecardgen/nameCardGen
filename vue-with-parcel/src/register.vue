<template>
   <!-- REGISTER -->
        <div class="card">
          <div class="card-header">
            <h3>Register</h3>
          </div>
          <div class="card-body">
            <form method="POST" v-on:submit.prevent="registerDetail">
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="first name" v-model="registerFN">  
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="last name" v-model="registerLN">  
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="email" v-model="registerEmail">  
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-key"></i></span>
                </div>
                <input type="password" class="form-control" placeholder="password" v-model="registerPass">
              </div>
              <div class="row align-items-center remember">
                <input type="checkbox">Remember Me
              </div>
              <div class="form-group">
                <input type="submit" value="Register" class="btn float-right login_btn">
              </div>
            </form>
          </div>
      </div>
</template>

<script>
export default {
    components: {
    },
    data(){
        return {
            registerFN: '',
            registerLN: '',
            registerEmail: '',
            registerPass: '',
        }
    },
    methods: {
      registerDetail() {
        this.$emit('kirimregister', {
          firstName: this.registerFN,
          lastName: this.registerLN,
          email: this.registerEmail,
          password: this.registerPass,
        })
      }
    }
}
</script>

<style scoped>

</style>
