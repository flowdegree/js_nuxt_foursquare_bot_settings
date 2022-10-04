<!-- Please remove this file from your project -->
<template>
	<section class="p-5 bg-alert">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="mb-2">
						<h1>Welcome {{ user?.firstName }}</h1>
						<small class="text-muted">This is your settings page as read from the database, your changes here will be reflectd in the next day</small>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div class="card card-body border-0 shadow-sm">
						<div class="">
							<div class="form-check form-switch ps-0">
								<label class="form-check-label" for="flexSwitchEnableBot">Bot Enabled ?</label>
								<div class="float-end">
									<span :class="`spinner-border spinner-border-sm ${bot_enabled_spinner}`" role="status" aria-hidden="true"></span>
									<span class="visually-hidden">Loading...</span>
									<input class="form-check-input" type="checkbox" v-model="enabled_bot" role="switch" id="flexSwitchEnableBot" />
								</div>
								
							</div>

							<div class="form-check form-switch ps-0">
								<label class="form-check-label" for="flexSwitchEnableAutoCheckIn">Auto Check In ?</label>
								<div class="float-end">
									<span :class="`spinner-border spinner-border-sm ${auto_check_in_enabled_spinner}`" role="status" aria-hidden="true"></span>
									<span class="visually-hidden">Loading...</span>
									<input class="form-check-input" type="checkbox" v-model="enabled_auto_checki_in" role="switch" id="flexSwitchEnableAutoCheckIn" />
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data(){
		return {
			user: null,
			enabled_bot: false,
			bot_enabled_spinner: '',
			enabled_auto_checki_in: false,
			auto_check_in_enabled_spinner: '',
		}
	},
	mounted() {
		if(this.$auth.user?.user?.firstName){
			this.user = this.$auth.user.user;
		}
		console.log("mounted");
		this.saveUser();
	},
	watch: {
        enabled_bot: async function(val, oldVal) {
			this.bot_enabled_spinner = '';
			console.log(val);
			try {
				let toggle = await this.$MFO_UTILS.setBotStatus(val);
			} catch (error) {
				console.log(error)
			}

			this.bot_enabled_spinner = 'd-none';
        },
		enabled_auto_checki_in: async function(val, oldVal) {
			this.auto_check_in_enabled_spinner = '';
			console.log(val);
			try {
				let toggle = await this.$MFO_UTILS.setAutoCheckinStatus(val);
			} catch (error) {
				console.log(error)
			}

			this.auto_check_in_enabled_spinner = 'd-none';
        }
    },

	methods: {
		async saveUser() {
			//console.log(this.$auth.strategy.token.get());
			//console.log(this.$auth.user)
			//return;
			//console.log(await this.$fire.firestore.collection('users').get());
			const saveUser = await this.$MFO_UTILS.createUserInFirebase();

			// get user configs
			const userConfigs = await this.$MFO_UTILS.getConfigsFromFirebase();
			if(userConfigs){
				if(userConfigs?.enabled == true){
					this.enabled_bot = true;
				}

				if(userConfigs?.settings?.auto_check_in?.enabled == true){
					this.enabled_auto_checki_in = true;
				}

				this.auto_check_in_enabled_spinner = 'd-none';
				this.bot_enabled_spinner = 'd-none';
			}
			console.log(userConfigs)
			
		},
	},
};
</script>
