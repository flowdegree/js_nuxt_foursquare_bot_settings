<template>
  <header class="p-5 bg-light">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col">
          <a href="/">Logo</a>
        This is header section
      </div>
        <div class="col">
          <button class="btn btn-danger"  @click="logout">Log Out</button>
        </div>
      </div>
        
    </div>
  </header>
</template>

<script>
export default {
  methods:{
    async logout() {
      await this.$auth.logout().catch(e => {
          console.log('logged out with error', e)
      })
      console.log('logged out')
    }
  }
}
</script>

<style>

</style>