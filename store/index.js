var cookie = require('cookie');

export const actions = {
    async nuxtServerInit({commit}, {req}) {
      let auth = null

      if (req.headers.cookie) {
        //console.log(req.headers.cookie);
        var cookies = cookie.parse(req.headers.cookie);

        // cookie found
        try {
          // check data user login with cookie
          //console.log('haha')
          let token = cookies['auth._token.social'].replace('Bearer ','')
          //console.log('token from cookie', token)
          //console.log('getUrl', token)
          const { data } = await this.$axios.get('fsapi/users/self/', {
                params: {
                    oauth_token: token,
                    v: '20220901'
                }
            })
          //console.log('haha', data)
          // server return the data is cookie valid loggedIn is true
          auth = data.data // set the data auth
        } 
        catch (err) {
          // No valid cookie found
          auth = null
        }
      }
  
      // How we can set the user for AuthNuxt
      // Source: https://auth.nuxtjs.org/api/auth
      this.$auth.setUser(auth);
    },
  }
  