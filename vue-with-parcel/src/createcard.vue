<template>
  <div class="col">
    <div id="content-create">
      <div class="content-title">
        <h2>Create a name card.</h2>

        <div id="card-canvas" v-bind:class="bgImg">
          <div class="text" v-bind:class="nameDesign">{{ name }}</div>
          <div class="text" v-bind:class="posDesign">{{ position }}</div>
          <div class="text" v-bind:class="emailDesign">{{ email }}</div>
          <div class="text" v-bind:class="companyDesign">{{ company }}</div>
          <div class="text" v-bind:class="addressDesign">
            <p style="white-space: pre-line;">{{ address }}</p>
          </div>
        </div>
        
        <div>
          <p align="center">
            <input v-model="name" type="text" placeholder="Your name....">
            <input v-model="position" type="text" placeholder="position....">
          </p>
          <p align="center">
            <input v-model="email" type="text" placeholder="email....">
            <input v-model="company" type="text" placeholder="company....">
          </p>
          <p align="center">
            <textarea v-model="address" rows="4" cols="50" placeholder="address....."></textarea>
          </p>
        </div>

        <div>
          <p align="center">
            <a
              href="#"
              class="button"
              target="_blank"
              v-on:click.prevent="capture()"
              id="btn-download"
              download="card.png"
            >Capture</a>
          </p>
        </div>

        <div>
          <select v-model="cardOpt" @change="loadCardDesign()">
            <option disabled value>Please select one</option>
            <option value="1" selected>Template-1</option>
            <option value="2">Template-2</option>
            <option value="3">Template-3</option>
          </select>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      message: "Hello World",
      name: 'John Doe',
      position: 'Student',
      email: 'johndoe@mail.com',
      company: 'Hacktiv8',
      address: 'Jl. Iskandar Muda no.7\nKebayoran Lama\nJakarta Selatan',
      cardOpt: '',
      nameDesign: 'name1',
      posDesign: 'position1',
      emailDesign: 'email1',
      companyDesign: 'company1',
      addressDesign: 'address1',
      bgImg: 'bg-img1'
    };
  },
  methods: {
    capture() {
      console.log('masuk capture')
      html2canvas(document.getElementById('card-canvas'))
      .then(canvas => {
        // let base64URL = canvas.toDataURL('image/png')
        let a = document.createElement('a');
        a.href = canvas.toDataURL('image/jpg').replace('image/jpeg', "image/octet-stream")
        a.download = 'card.jpg'
        a.click()
      })
    },
    loadImgProfile(event) {
      let profilePic = document.getElementById('img-profile')
      profilePic.src = URL.createObjectURL(event.target.files[0])
    },
    loadCardDesign() {
      console.log('masuk')
      if (this.cardOpt === '1') {
        this.nameDesign = 'name1'
        this.posDesign = 'position1'
        this.emailDesign = 'email1'
        this.companyDesign = 'company1'
        this.addressDesign = 'address1'
        this.bgImg = 'bg-img1'
      }
      else if (this.cardOpt === '2') {
        this.nameDesign = 'name2'
        this.posDesign = 'position2'
        this.emailDesign = 'email2'
        this.companyDesign = 'company2'
        this.addressDesign = 'address2'
        this.bgImg = 'bg-img2'
      }
      else if (this.cardOpt === '3') {
        this.nameDesign = 'name3'
        this.posDesign = 'position3'
        this.emailDesign = 'email3'
        this.companyDesign = 'company3'
        this.addressDesign = 'address3'
        this.bgImg = 'bg-img3'
      }
    }
  }
};
</script>

<style scoped>
</style>
