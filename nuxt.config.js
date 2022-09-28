export default {
  target: 'static',
  ssr: false,

  head: {
    title: 'js_nuxt_foursquare_bot_settings',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [

      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
    ]
  },

  css: [
    '~/assets/scss/main.scss'
  ],

  plugins: [
    {
      src: '~/plugins/bootstrap.client.js'
    },
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  auth: {
    strategies: {
      social : {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://foursquare.com/oauth2/authenticate',
          token: "https://foursquare.com/oauth2/access_token",
          userInfo: 'https://api.foursquare.com/v2/users/self',
          logout: 'https://example.com/logout'
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800
        },
        responseType: 'code',
        grantType: 'authorization_code',
        clientId: 'SSLCJJA1VNRMXXI2OS40YTWS5IDL1155I4QHXRR5YM3HLJ01',
        redirectUri:'http://localhost:3000/callback',
        codeChallengeMethod: '',

      }
  
    }
  },
  
  build: {
  },

  router: {
    middleware: ['auth']
  }
  
  
}
