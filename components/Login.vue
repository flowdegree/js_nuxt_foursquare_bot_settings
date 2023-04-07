<template>
	<div class="form-signin w-100 m-auto text-center">
		<form data-bitwarden-watching="1">
			<img class="mb-4" height="75" src="~/assets/images/swarm.png" />
			<h1 class="h3 mb-3 fw-normal">Please sign in</h1>

			<div class="form-floating">
				<input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
				<label for="floatingInput">Email address</label>
			</div>
			<div class="form-floating">
				<input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
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
export default {};
</script>

<style>
</style>