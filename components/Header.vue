<template>
  <header class="p-5 bg-light">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col">
          <a href="/">Logo</a>
        This is header section
      </div>
        <div class="col text-end">
          <button class="btn btn-danger btn-sm"  @click="logout"><i class="bi bi-person-fill"></i> Log Out</button>
        </div>
      </div>
        
    </div>
  </header>
</template>

<script setup lang="ts">

const logout =  async() =>{

  const  nuxtApp = useNuxtApp()

  await nuxtApp.$auth.logout().catch(e => {
          console.log('logged out with error', e)
      })
      console.log('logged out')
    }
</script>

<style>

</style>