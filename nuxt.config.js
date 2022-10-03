export default {
  target: 'server',
  ssr: true,

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
    {src: '@nuxtjs/axios', mode: 'client' },
    {src: '@nuxtjs/auth-next', mode: 'client' },
    '@nuxtjs/proxy',
    '@nuxtjs/firebase'
  ],

  firebase: {
    config: {
      apiKey: "AIzaSyCXt_r3CZdLY67Vlw6Kq-ObyGxaxQswfNY",
      authDomain: "swarm-bot-configurator.firebaseapp.com",
      projectId: "swarm-bot-configurator",
      storageBucket: "swarm-bot-configurator.appspot.com",
      messagingSenderId: "882134047665",
      appId: "1:882134047665:web:255fe703448cb425cc7b90",
      measurementId: "G-EYTQ6PZ6X1"
    },
    services: {
      firestore: true,
      storage: true,
    },
 },

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    proxy: true,
  },

  proxy: {
    '/authenticate/': {
        target: 'https://foursquare.com/',
        pathRewrite: {'^/authenticate/': '/'}
    },
    '/fsapi/': {
      target: 'https://api.foursquare.com/v2/',
      pathRewrite: {'^/fsapi/': '/'}
  },
  },
 
  
  auth: {
    strategies: {
      foursquare : {
        scheme: "oauth2",
        responseType: 'code',
        protocol: '',
        clientId: 'OUYWUC4AHY4VSFCWA0EB055U3V4A01WYGRSAZ0MXLS0JKCUA',
        clientSecret: 'DK3KXOIRRPM3CGGXUYHEDTPVJDDNPDGDE0GYHUBWRCPNQLAG',
        redirectUri: 'http://localhost:3000/login',
        scope: '',
        state: 'vUQrsZqoqE#_=_',
        endpoints: {
          authorization: "https://foursquare.com/oauth2/authenticate",
          token: "https://foursquare.com/oauth2/access_token",
          userInfo: "https://api.foursquare.com/v2/users/self"
        },
        grantType: "authorization_code",
      }
    }
  },
  
  build: {
  },

  router: {
    middleware: ['auth']
  },

  serverMiddleware: [{ path: '/api', handler: '~/api/index.js' }],
  
  
}
