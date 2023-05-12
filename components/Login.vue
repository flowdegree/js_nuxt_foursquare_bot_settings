<template>
	<div class="form-signin w-100 m-auto text-center">
		<form data-bitwarden-watching="1" @submit.prevent="userLogin">
			<img class="mb-4" height="75" src="~/assets/images/swarm.png" />
			<h1 class="h3 mb-3 fw-normal">Please sign in</h1>

			<div class="form-floating">
				<input id="floatingInput" v-model="login.email" type="email" class="form-control" placeholder="name@example.com" />
				<label for="floatingInput">Email address</label>
			</div>
			<div class="form-floating">
				<input id="floatingPassword" v-model="login.password" type="password" class="form-control" placeholder="Password" autocomplete="password" />
				<label for="floatingPassword">Password</label>
			</div>

			<div class="checkbox mb-3">
				<label> <input type="checkbox" value="remember-me" /> Remember me </label>
			</div>
			<button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
			<p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
		</form>
	</div>
</template>

<script>
export default {
	data() {
    return {
      login: {
        email: '',
        password: ''
      },
	  otp: '',

    }
  },
  methods: {
    async userLogin() {
		if(this.login.email && this.login.password && this.otp){
			const response = await this.$auth.loginWith('local', { data: this.login });
			// if success, disable fields username and password, show otp, hide login button
			console.log(response)
		}
		else{
			try {
				const flowId = this.$axios.$post('api/auth/initiate_login');
				// if success, disable fields username and password, show otp, hide login button
				console.log(flowId)
			} 
			catch (err) {
				console.log(err)
			}
		}
      
    }
  }

};
</script>

<style>
</style>