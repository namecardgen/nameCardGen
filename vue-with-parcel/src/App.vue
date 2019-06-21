<template>

  <div>
    <div id="landing-page">
      <div class="container">
        <landingTitle></landingTitle>
        <landingBody></landingBody>
      </div>
    </div>

    <div id="content">
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

export default {
    components: {
      landingTitle,
      landingBody,
      createCard,
      listCard
    },
    data(){
        return {
            message : 'Hello World'
        }
    }
}
</script>

<style scoped>

</style>
