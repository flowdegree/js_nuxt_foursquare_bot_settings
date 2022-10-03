<!-- Please remove this file from your project -->
<template>
	<section class="p-5 bg-alert">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="">
						<h1>Welcome {{ this.$auth.user.user.firstName }}</h1>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	mounted() {
		console.log("mounted");
		this.saveUser();
	},
	methods: {
		async saveUser() {
			//console.log(this.$auth.strategy.token.get());
			//console.log(this.$auth.user)
			//return;
			//console.log(await this.$fire.firestore.collection('users').get());
			const saveUser = await this.$myUtils.createUserInFirebase();

			// get user configs
			const userConfigs = await this.$myUtils.getConfigsFromFirebase();
			console.log(userConfigs)
			
		},
	},
};
</script>
