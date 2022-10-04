// * with help of Alexander Lichter, Apr 18, 2020, https://blog.lichter.io/posts/nuxt-api-call-organization-and-decoupling/
export default ($firebase, $auth) => () => ({

	async createUserInFirebase() {
		console.log($auth);
		console.log($firebase);
		const userRef = $firebase.firestore.collection("users").doc($auth.user.id);
	  
		try {
		  await userRef.set({
			user: $auth.user.user,
			token: $auth.strategy.token.get(),
			date: new Date(Date.now()),
		  });
		} catch (e) {
		  console.log(e);
		}
	},

	async getUserFromFirebase(){

	},

	async getConfigsFromFirebase(){
		const configsRef = $firebase.firestore.collection("configs").doc($auth.user.user.id);

			try {
				const userConfigs = await configsRef.get();
				//console.log(userConfigs);
				if (!userConfigs.exists) {
					console.log('No such document!');
				} 
				else {
					console.log('Document data:', userConfigs.data());
					return userConfigs.data();
				}
			} 
			catch (e) {
				console.log(e);
				return null;
			}
	},

	async setConfigsInFirebase(){

	},

	async setBotStatus(value){
		try {
			const configsRef = $firebase.firestore.collection("configs").doc($auth.user.user.id);
			await configsRef.update({enabled: value});
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	},

	async setAutoCheckinStatus(value){
		try {
			const configsRef = $firebase.firestore.collection("configs").doc($auth.user.user.id);
			await configsRef.update({settings: {
				auto_check_in: {
					enabled: value
				}
			} });
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}



});

