import  ha from '~auth/authModule'

module.exports = function foursquare(nuxt, strategy) {
  const DEFAULTS = {
    scheme: "oauth2",
    endpoints: {
      authorization: "https://foursquare.com/oauth2/authenticate",
      token: "https://foursquare.com/oauth2/access_token",
      userInfo: "https://api.foursquare.com/v2/users/self"
    },
    grantType: "authorization_code",
  };
  ha.assignDefaults(strategy, DEFAULTS);
  ha.addAuthorize(nuxt, strategy, true);
}
