<!-- Please remove this file from your project -->
<template>
  <section class="p-5 bg-alert">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="">
            <h1>Welcome {{ this.$auth.user.firstName }}</h1>
            <pre dir="ltr">
              {{ this.$auth.user }}
            </pre>


            
          </div>
        </div>
      </div>
    </div>
  </section>
  
</template>

<script>
export default {

  mounted(){
    console.log('mounted')
    this.saveUser();
  },
  methods: {
    async saveUser() {
      let token = this.$auth.strategy.token.get().replace('Bearer ','')
      console.log('token',token)
      console.log(await this.$fire.firestore.collection('users').get());
      const messageRef = this.$fire.firestore.collection('users').doc(this.$auth.user.id)
      try {
        await messageRef.set({
          user: this.$auth.user,
          token: token,
          date: new Date(Date.now())
      })
      } catch (e) {
        console.log(e)
        return
      }
      try {
        await this.$fire.firestore.collection('users').add({
          email: 'foo@foo.foo', 
          field: 'test'
        }
          
        )
      } catch (e) {
        console.log(e)
      }
    }
  }

};
</script>
