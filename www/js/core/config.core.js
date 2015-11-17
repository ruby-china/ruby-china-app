(function() {
  'use strict';

  angular
    .module('app.core')
    .config(oauthConfig);

  ////////////////////////////////////////////////////////////

  /* @ngInject */
  function oauthConfig(OAuthProvider) {
    OAuthProvider.configure({
      baseUrl: 'https://ruby-china.org',
      grantPath: '/oauth/token',
      revokePath: '/oauth/revoke',
      clientId: 'b9a6f45c',
      clientSecret: '469278baa8fa3a9eee54f0c618c6924893e45fc02263e2163a693402d62a7f9d'
    });
  }

})();
