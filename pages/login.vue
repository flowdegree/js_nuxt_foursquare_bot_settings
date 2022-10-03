<template>
  <section id="login-form" class="form-signin w-100 m-auto">
    <form>
        
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <small class="small"></small>

        <a href="#" @click="loginSwarm" class="w-100 btn btn-lg btn-primary d-flex align-items-center justify-content-center gap-2"><span>Sign in</span> <div class="swarm-img"></div></a>
    </form>

  </section>
</template>

<script>
export default {
  async asyncData({ route, $axios }) {
  },
  methods: {
    async loginSwarm() {
      console.log('before call');
      await this.$auth.loginWith('social').catch(e => {
          console.log('hello')
      })    
    },
  },

}
</script>